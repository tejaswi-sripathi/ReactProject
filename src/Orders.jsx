import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearOrders } from "./store";  // import action
import "./order.css";

function Orders() {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const handleClearOrders = () => {
    if (window.confirm("Are you sure you want to clear all orders?")) {
      dispatch(clearOrders());
    }
  };

  return (
    <div className="container-fluid mt-4">
      <h2 className="mb-3 text-gradient text-center">📦 Your Orders</h2>

      {/* Clear Orders Button */}
      {orders && orders.length > 0 && (
        <div className="mb-3">
          <button onClick={handleClearOrders}>Clear All Orders</button>
        </div>
      )}

      {orders && orders.length > 0 ? (
        <div className="orders-grid">
          {orders.map((order, index) =>
            order ? (
              <div key={index} className="order-card shadow-lg">
                <div className="order-header">
                  <h5 className="order-title">Order #{order.id}</h5>
                  <span className="order-date">{order.date}</span>
                </div>

                <div className="order-summary">
                  <p>
                    <strong>Total: </strong>
                    <span className="order-price">₹{Number(order.totalPrice).toFixed(2)}</span>
                  </p>
                  <p>
                    <strong>Tax:</strong> ₹{order.tax}
                  </p>
                  <p>
                    <strong>Discount:</strong> ₹{order.discount}
                  </p>
                </div>

                <h6 className="mt-3">🛒 Items:</h6>
                <ul className="order-items">
                  {order.items &&
                    order.items.map((item, i) => (
                      <li key={i} className="order-item">
                        <span className="item-name">{item.name}</span>
                        <div className="item-right">
                          <span className="item-qty badge bg-primary">
                            x{item.quantity}
                          </span>
                          <span className="item-price">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            ) : null
          )}
        </div>
      ) : (
        <p className="text-muted text-center">
          🙁 You have no past orders. Start shopping now!
        </p>
      )}
    </div>
  );
}

export default Orders;
