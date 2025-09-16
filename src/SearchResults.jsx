import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./searchResults.css"; // Import the CSS

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  // Get all products from Redux, default to empty arrays
  const veg = useSelector((state) => state.products.veg) || [];
  const fruits = useSelector((state) => state.products.fruits) || [];
  const dairy = useSelector((state) => state.products.dairy) || [];
  const meat = useSelector((state) => state.products.nonveg) || [];
  const nuts = useSelector((state) => state.products.nutsandseeds) || [];

  const allProducts = [...veg, ...fruits, ...dairy, ...meat, ...nuts];

  // Filter products based on search query
  const filteredProducts = allProducts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container container-fluid my-5">
      <h2 className="mb-4">Search results for "{query}"</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="row">
          {filteredProducts.map((item) => (
            <div key={item.id} className="col-12 mb-3">
              <div className="card search-card h-100 text-center">
                <div className="image-container">
                  <img
                    src={item.imageurl}
                    alt={item.name}
                    className="product-image"
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">₹{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
