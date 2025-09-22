import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import QRCode from "react-qr-code";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./cart.css";

import {
  addOrder,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  RemoveFromCart
} from "./store";
import { calculateTotal, buttonDiscountCalculation, getcouponDiscount } from "./discountUtils";
import { showOrderNotification } from "./animation";
import confetti from "canvas-confetti";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const userAuth = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = calculateTotal(cartItems);
  const taxAmount = totalPrice * 0.12;

  const [discountPercentage, setButtonDiscount] = useState(0);
  const discountAmount = buttonDiscountCalculation(totalPrice, discountPercentage);
  const totalPriceAfterDiscount = totalPrice - discountAmount;

  const [couponCode, setCouponCode] = useState("");
  const [couponResult, setCouponResult] = useState({
    discountAmount: 0,
    discountPercentage: 0,
    isvalid: false
  });

  const [customerEmail, setCustomerEmail] = useState("");
  const [dummyQuote, setDummyQuote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [qrOrderId, setQrOrderId] = useState(null);

  const finalPrice = Number(
    (totalPriceAfterDiscount + taxAmount - couponResult.discountAmount).toFixed(0)
  );

  // ✅ Apply Coupon
  const handleApplyCoupon = () => {
    const result = getcouponDiscount(totalPrice, couponCode);
    setCouponResult(result);
    if (!result.isvalid) toast.error("Invalid coupon code", { autoClose: 800 });
    else toast.success(`Coupon ${couponCode} applied!`, { autoClose: 800 });
  };

  // ✅ Send Email
  const handleCheckout = () => {
    if (!userAuth.isAuthenticated) {
      toast.error("⚠️ Please login before checkout!");
      navigate("/login", { state: { from: "/cart" } });
      return;
    }

    if (!customerEmail) {
      toast.warning("Please enter your email address", { autoClose: 800 });
      return;
    }

    const orderId = new Date().getTime();
    const templateParams = {
      order_id: orderId,
      orders: cartItems.map((item) => ({
        name: item.name,
        price: (item.price * item.quantity).toFixed(2),
        units: item.quantity
      })),
      cost: {
        totalprice: totalPrice.toFixed(2),
        shipping: "50.00",
        tax: taxAmount.toFixed(2),
        total: finalPrice,
        buttondisc: discountAmount,
        coupondisc: couponResult.discountAmount
      },
      email: customerEmail
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", templateParams)
      .then(() => toast.success("✅ Email sent successfully!", { autoClose: 800 }))
      .catch((err) => {
        toast.error("❌ Email sending failed!", { autoClose: 800 });
        console.error(err);
      });
  };

  // ✅ Complete Purchase
  const handleCompletePurchase = async () => {
    if (!userAuth.isAuthenticated) {
      toast.error("⚠️ Please login before placing an order!");
      navigate("/login", { state: { from: "/cart" } });
      return;
    }

    if (cartItems.length === 0) return toast.warning("Cart is empty!", { autoClose: 800 });
    if (!customerEmail) return toast.warning("Enter your email!", { autoClose: 800 });
    if (!paymentMethod) return toast.warning("Select a payment method!", { autoClose: 800 });

    const orderId = new Date().getTime();
    const orderData = {
      id: orderId,
      items: [...cartItems],
      totalPrice: finalPrice,
      tax: taxAmount.toFixed(2),
      discount: (discountAmount + couponResult.discountAmount).toFixed(2),
      paymentMethod,
      email: customerEmail,
      date: new Date().toISOString()
    };

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", orderData);
      dispatch(addOrder(orderData));
      dispatch(clearCart());
      setQrOrderId(orderId);
      showOrderNotification(orderId);
      toast.success("✅ Order placed successfully!", { autoClose: 800 });
      navigate("/orders");
    } catch (err) {
      toast.error("❌ Order failed. Try again!", { autoClose: 800 });
    }
  };

  // ✅ Fetch dummy quote on valid coupon
  useEffect(() => {
    const fetchDummyQuote = async () => {
      if (couponResult.isvalid) {
        try {
          const response = await axios.get("https://dummyjson.com/quotes/random");
          setDummyQuote(response.data.quote);
          confetti();
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchDummyQuote();
  }, [couponResult]);

  const cartListItems = cartItems.map((item) => (
    <li
      key={item.id}
      className="list-group-item d-flex align-items-center justify-content-between"
    >
      <div className="d-flex align-items-center">
        <img
          src={item.imageurl}
          alt={item.name}
          height="100"
          width="100"
          className="rounded shadow-sm me-3"
        />
        <div>
          <h5>{item.name}</h5>
          <p className="text-muted">Quantity: {item.quantity}</p>
          <p className="fw-bold">₹{item.price * item.quantity}</p>
        </div>
      </div>
      <div>
        <button
          className="btn btn-danger btn-sm me-2"
          onClick={() => {
            dispatch(RemoveFromCart(item));
            toast.error(`${item.name} removed`, { autoClose: 800 });
          }}
        >
          ❌
        </button>
        <button
          className="btn btn-light btn-sm me-2"
          onClick={() => {
            dispatch(increaseQuantity(item));
            toast.success(`${item.name} +1`, { autoClose: 800 });
          }}
        >
          ➕
        </button>
        <button
          className="btn btn-light btn-sm"
          onClick={() => {
            dispatch(decreaseQuantity(item));
            toast.warning(`${item.name} -1`, { autoClose: 800 });
          }}
        >
          ➖
        </button>
      </div>
    </li>
  ));

  return (
    <div className="cart-container my-4">
      <ToastContainer position="top-right" autoClose={800} />
      <div className="row">
        <div className={cartItems.length > 0 ? "col-md-6" : "col-12"}>
          <h1 className="text-center text-gradient mb-4">🛒 Cart Items</h1>
          <ul className="list-group mb-4">{cartListItems}</ul>
          {cartItems.length === 0 && (
            <p className="text-center text-muted">🛒 Your cart is empty.</p>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="col-md-6">
            <div className="card shadow p-3 mb-3">
              <div className="card-body">
                <h4>
                  Total Price: <span className="text-primary">₹ {totalPrice}</span>
                </h4>
                <h4>
                  Final Price: <span className="text-success">₹ {finalPrice}</span>
                </h4>

                <div className="mt-3">
                  <button
                    className="btn btn-outline-success me-2"
                    onClick={() => {
                      setButtonDiscount(10);
                      toast.success("10% discount", { autoClose: 800 });
                    }}
                  >
                    10% Discount
                  </button>
                  <button
                    className="btn btn-outline-success me-2"
                    onClick={() => {
                      setButtonDiscount(20);
                      toast.success("20% discount", { autoClose: 800 });
                    }}
                  >
                    20% Discount
                  </button>
                  <button
                    className="btn btn-outline-success me-2"
                    onClick={() => {
                      setButtonDiscount(30);
                      toast.success("30% discount", { autoClose: 800 });
                    }}
                  >
                    30% Discount
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      setButtonDiscount(0);
                      toast.error("No discount", { autoClose: 800 });
                    }}
                  >
                    No Discount
                  </button>

                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="form-control"
                    />
                    <button className="btn btn-primary mt-2" onClick={handleApplyCoupon}>
                      Apply Coupon
                    </button>
                  </div>

                  {couponResult.isvalid && dummyQuote && (
                    <div className="alert alert-success mt-2">💡Quote: {dummyQuote}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="card shadow p-3">
              <div className="card-body">
                <label>Enter your email for order confirmation:</label>
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />
                <button className="btn btn-info mb-3 w-100" onClick={handleCheckout}>
                  Send Email
                </button>

                <h5>Select Payment Method:</h5>
                <button
                  className="btn btn-outline-primary me-2"
                  onClick={() => setPaymentMethod("qr")}
                >
                  QR Code
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setPaymentMethod("cod")}
                >
                  Cash on Delivery (COD)
                </button>

                {paymentMethod === "cod" && (
                  <p className="mt-2 text-success fw-bold">
                    ✅ You have selected Cash on Delivery. Please keep the exact amount ready.
                  </p>
                )}

                {paymentMethod === "qr" && (
                  <div className="text-center mt-3">
                    <h4>Scan UPI QR to pay ₹{finalPrice}</h4>
                    <QRCode
                      value={`upi://pay?pa=tejaswisripathi@okhdfcbank&pn=Teju&cu=INR&am=${finalPrice}`}
                    />
                  </div>
                )}

                <button className="btn btn-success w-100 mt-3" onClick={handleCompletePurchase}>
                  Complete Purchase
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
