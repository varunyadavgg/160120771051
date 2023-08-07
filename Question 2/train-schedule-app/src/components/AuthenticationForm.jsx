import React, { useState } from "react";
import { authenticate } from "../api.js";

function AuthenticationForm({ setAuthToken }) {
  const [clientID, setClientID] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [authenticationStatus, setAuthenticationStatus] = useState("");

  const handleAuthentication = async (e) => {
    e.preventDefault();

    try {
      const authToken = await authenticate(clientID, clientSecret);
      setAuthToken(authToken);
      setAuthenticationStatus("Authentication successful!");
    } catch (error) {
      setAuthenticationStatus("Authentication failed. Please check your credentials and try again.");
    }
  };

  return (
    <div>
      <h2>Authentication</h2>
      <form onSubmit={handleAuthentication}>
        <label>
          Client ID:
          <input type="text" value={clientID} onChange={(e) => setClientID(e.target.value)} />
        </label>
        <br />
        <label>
          Client Secret:
          <input type="password" value={clientSecret} onChange={(e) => setClientSecret(e.target.value)} />
        </label>
        <br />
        <button type="submit">Authenticate</button>
      </form>
      <p>{authenticationStatus}</p>
    </div>
  );
}

export default AuthenticationForm;
