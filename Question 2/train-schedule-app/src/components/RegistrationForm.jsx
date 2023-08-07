// RegistrationForm.js

import React, { useState } from "react";
import { registerCompany } from "../api.js";

function RegistrationForm() {
  const [companyName, setCompanyName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registrationData = await registerCompany({
        companyName,
        ownerName,
        rollNo,
        ownerEmail,
        accessCode,
      });

      setRegistrationStatus("Registration successful!");
      console.log("Client ID:", registrationData.clientID);
      console.log("Client Secret:", registrationData.clientSecret);
    } catch (error) {
      setRegistrationStatus("Registration failed. Please check details and see if Creating a duplicate account");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </label>
        <label>
          Owner Name:
          <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
        </label>
        <label>
          Roll No:
          <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
        </label>
        <label>
          Owner Email:
          <input type="email" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} />
        </label>
        <label>
          Access Code:
          <input type="text" value={accessCode} onChange={(e) => setAccessCode(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
      <p>{registrationStatus}</p>
    </div>
  );
}

export default RegistrationForm;
