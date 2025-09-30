import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./veg.css"; // custom styles

function  Fruits() {
  let fruitproducts = useSelector((globalState) => globalState.products.fruits);
  let dispatch = useDispatch();

  let productsperpage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * productsperpage;
  const indexOfFirstProduct = indexOfLastProduct - productsperpage;
  const currentProducts = fruitproducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="itemsfullpage">
        <h1 className="text-center text-gradient mb-4">Fresh Fruits...</h1>

        <div className="row">
          {currentProducts.map((product) => (
            <div className="col-sm-4 mb-3" key={product.id}>
              <div className="item-card">
                <img
                  src={product.imageurl}
                  alt={product.name}
                  className="item-img"
                />

                <h3 className="item-title">{product.name}</h3>

                <p className="item-desc">{product.description}</p>

                <p className="item-price">
                  <em>Per Kg ₹{product.price}</em>
                </p>

                <button
                  className="add-btn w-100"
                  onClick={() => {
                    dispatch(addToCart(product));
                    toast.success(`${product.name} added to cart`);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-3">
          <nav>
            <ul className="pagination">
              <button
                className="btn btn-primary mx-2"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              {Array.from(
                { length: Math.ceil(fruitproducts.length / productsperpage) },
                (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}

              <button
                className="btn btn-primary mx-2"
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, Math.ceil(fruitproducts.length / productsperpage))
                  )
                }
                disabled={
                  currentPage ===
                  Math.ceil(fruitproducts.length / productsperpage)
                }
              >
                Next
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Fruits;
