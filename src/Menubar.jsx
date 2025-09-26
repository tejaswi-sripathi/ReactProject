import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./store";

import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./MeatSeafood";
import DairyProducts from "./DairyProducts";
import Fruits from "./Fruits";
import Orders from "./Orders";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Cart from "./Cart";
import Nutsseeds from "./Nutsseeds";
import Login from "./Login";
import SearchResults from "./SearchResults";
import SignUp from "./SignUp";
import Aboutus from "./Aboutus";

import "./menubar.css";

function Navbar() {
  const cartItems = useSelector((state) => state.cart);
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const { isAuthenticated, currentUser } = useSelector((state) => state.userAuth);

  const [searchBar, setSearchBar] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchBar.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchBar.trim())}`);
      setSearchBar(""); 
      setIsMenuOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar custom-navbar fixed-top shadow-lg">
      <div className="container-fluid flex-column">
        {/* Top bar: logo, hamburger, search, auth/cart */}
        <div className="d-flex flex-wrap justify-content-between align-items-center w-100 py-2">
          {/* Logo */}
          <NavLink className="navbar-brand text-light fw-bold d-flex align-items-center me-3" to="/">
            <span className="fs-3 site-title">
              <img src="/Images/logoes.png" alt="logo" height="50px" width="50px" />FarmToHome
            </span>
          </NavLink>

          {/* Hamburger button only on small screens */}
          <div
            className="menu-toggle d-lg-none text-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "×" : "☰"}
          </div>

          {/* Search bar */}
          <form
            className="d-flex mx-auto flex-grow-1 px-3 mt-2 mt-lg-0 search-form"
            style={{ maxWidth: "600px" }}
            onSubmit={handleSearch}
          >
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="🔍 Search fresh veggies, fruits, dairy..."
              value={searchBar}
              onChange={(e) => setSearchBar(e.target.value)}
            />
            <button className="btn fw-bold search-btn" type="submit">Search</button>
          </form>

          {/* Auth / Cart buttons */}
          <div className="d-flex align-items-center mt-2 mt-lg-0">
            {isAuthenticated ? (
              <>
                <span className="text-light me-2 fw-bold">Welcome, {currentUser.username}</span>
                <button className="btn btn-danger fw-bold rounded-pill px-3 me-2" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink className="btn btn-success fw-bold rounded-pill px-3 me-2 login-btn" to="/login">Login</NavLink>
                <NavLink className="btn btn-success fw-bold rounded-pill px-3 me-2 signup-btn" to="/signup">Signup</NavLink>
              </>
            )}
            <NavLink className="btn btn-warning fw-bold rounded-pill px-3 cart-btn" to="/cart">
              🛒 Cart <span className="badge bg-dark text-light">{cartItemCount}</span>
            </NavLink>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-collapse w-100 ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links d-flex flex-lg-row flex-column">
            <li className="nav-item"><NavLink className="nav-link" to="/">🏠 Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/veg">🥕 Veg Items</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/meatandseafood">🥩 Meat & SeaFood</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/dairyproducts">🥛 Dairy Products</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/fruits">🍐 Fruits</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/nutsandseeds">🥜 Nuts & Seeds</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/orders">📦 Orders</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/aboutus">🤵🏻 About Us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contactus">📞 Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isNotFound = ![
    "/", "/veg", "/meatandseafood", "/dairyproducts", "/fruits",
    "/nutsandseeds", "/cart", "/orders", "/aboutus", "/contactus", "/login", "/signup", "/search"
  ].includes(location.pathname);

  return (
    <>
      {!isNotFound && <Navbar />}
      <div style={{ marginTop: isNotFound ? "0px" : "160px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/meatandseafood" element={<NonVeg />} />
          <Route path="/dairyproducts" element={<DairyProducts />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/nutsandseeds" element={<Nutsseeds />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default function Menubar() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
