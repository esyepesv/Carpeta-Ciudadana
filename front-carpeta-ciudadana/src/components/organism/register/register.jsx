import React, { useState } from "react";
import "./register.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleRegistration = async () => {
    try {
      // Validar la identificación del ciudadano antes de registrar
      const validationResponse = await fetch(
        `http://169.51.195.62:30174/apis/validateCitizen/${nationalID}`
      );

      if (validationResponse.ok) {
        // La identificación es válida, realizar el registro
        const registrationData = {
          id: nationalID,
          name: name,
          address: address,
          email: email,
          operatorId: 10003,
          operatorName: "Operador Ciudadano",
        };

        const registrationResponse = await fetch(
          "http://169.51.195.62:30174/apis/registerCitizen",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationData),
          }
        );

        if (registrationResponse.ok) {
          // Registro exitoso
          console.log("Registro exitoso");
        } else {
          // Registro fallido
          console.log("Registro fallido");
        }
      } else {
        // La identificación es inválida
        setValidationMessage("Invalid national ID");
      }
    } catch (error) {
      console.error("Error occurred during registration", error);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form>
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
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            id="address"
            className="form-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button className="register-button" onClick={handleRegistration}>
          Register
        </button>
        <p className="validation-message">{validationMessage}</p>
      </form>
    </div>
  );
};

export default Register;
