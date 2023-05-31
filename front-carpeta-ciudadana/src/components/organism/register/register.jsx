import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [nationalID, setNationalID] = useState("");

  const handleRegistration = async () => {
    try {
      const registrationData = {
        id: nationalID,
        name: name,
        address: address,
        email: email,
        operatorId: 10003,
        operatorName: "Operador Ciudadano",
      };

      const response = await fetch(
        "http://169.51.195.62:30174/apis/registerCitizen",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
        }
      );

      if (response.ok) {
        // Registration successful
        console.log("Registration successful");
      } else {
        // Registration failed
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error occurred during registration", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Register;
