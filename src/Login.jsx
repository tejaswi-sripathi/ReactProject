import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./store"; // Redux action
import './login.css';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.userAuth); // get users from store

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Find user
    const matchedUser = users.find(u => u.username === email && u.password === password);

    if (matchedUser) {
      dispatch(loginUser({ username: email, password })); // update Redux + localStorage
      navigate("/"); // redirect to home
    } else {
      setError("Invalid email or password. Please sign up if you don't have an account.");
    }
  };

  return (
    <>
    <div className=" login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            ref={emailRef}
            className="input-field"
            placeholder="Email"
          />
          <input
            type="password"
            ref={passwordRef}
            className="input-field"
            placeholder="Password"
          />
          <button type="submit" className="submit-btn">Login</button>
        </form>

        <p className="login-footer">
          Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
     </>
  );
}

export default Login;
