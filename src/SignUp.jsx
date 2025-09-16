import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
import { useDispatch } from "react-redux";
import { registerUser } from "./store"; // ✅ Use registerUser here

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = watch("password");

  const handleSignup = (data) => {
    // Save user to Redux + localStorage
    dispatch(
      registerUser({
        fullname: data.fullname,
        username: data.username,
        phone: data.phone,
        email: data.email,
        password: data.password,
      })
    );

    alert("🎉 Signup successful! Please login.");
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="signup-page d-flex justify-content-center align-items-center">
      <div className="card signup-card shadow-lg p-4">
        <h2 className="text-center mb-4 fw-bold">Create Your Account</h2>

        <form onSubmit={handleSubmit(handleSignup)}>
          {/* Full Name */}
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Full Name"
              {...register("fullname", { required: "Full name is required" })}
            />
            {errors.fullname && (
              <p className="text-danger small">{errors.fullname.message}</p>
            )}
          </div>

          {/* Username */}
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-danger small">{errors.username.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <input
              className="form-control"
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-danger small">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-danger small">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-danger small">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmpassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmpassword && (
              <p className="text-danger small">
                {errors.confirmpassword.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none fw-bold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
