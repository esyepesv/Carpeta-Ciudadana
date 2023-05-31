import React, { useState } from "react";

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

  const handleRegistration = () => {
    // Perform registration logic
    console.log("Register");
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        National ID:
        <input
          type="text"
          value={nationalID}
          onChange={(e) => setNationalID(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegistration}>Register</button>
      <p>{validationMessage}</p>
    </div>
  );
};

export default Login;
