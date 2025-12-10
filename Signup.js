import React, { useState } from "react";
import "./Login.css";

export default function Signup({ goToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle signup API call here
    console.log("Signup data:", formData);
    alert("Signup successful!");
  };

  return (
    <div className="login-container">
      {/* Header */}
      <div className="login-header">
        <div className="logo-box">🔍</div>
        <h2 className="logo-title">Lost & Found</h2>
        <p className="logo-subtitle">Track System</p>
      </div>

      {/* Signup Form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Sign Up
        </button>
      </form>

      {/* Footer */}
      <div className="login-footer">
        <p>
          Already have an account?{" "}
          <span className="login-link" onClick={goToLogin}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
