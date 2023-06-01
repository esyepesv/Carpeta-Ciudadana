import React, { useState } from "react";

import "./login.scss";

const Login = () => {
  const [name, setName] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `http://169.51.195.62:30174/apis/validateCitizen/${nationalID}`
      );

      if (response.ok) {
        const data = await response.json();
        setName(data.name);
        setValidationMessage("Login successful");
      } else {
        setValidationMessage("Invalid national ID");
      }
    } catch (error) {
      console.error("Error occurred while validating ID", error);
      setValidationMessage("An error occurred");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nationalID" className="form-label">
          National ID:
        </label>
        <input
          type="text"
          id="nationalID"
          className="form-input"
          value={nationalID}
          onChange={(e) => setNationalID(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <a className="register-button" href="/register">
          Register
        </a>
      </div>
      <p className="validation-message">{validationMessage}</p>
    </div>
  );
};

export default Login;
