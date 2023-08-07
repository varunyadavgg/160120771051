// App.js

import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import AuthenticationForm from "./AuthenticationForm";
import TrainDetails from "./TrainDetails";

function App() {
  const [registrationData, setRegistrationData] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  return (
    <div>
      <h1>Train Schedule App</h1>
      {!registrationData && (
        <RegistrationForm setRegistrationData={setRegistrationData} />
      )}
      {registrationData && !authToken && (
        <AuthenticationForm
          clientID={registrationData.clientID}
          setAuthToken={setAuthToken}
        />
      )}
      {authToken && (
        <TrainDetails trainID="2344" authToken={authToken} />
      )}
    </div>
  );
}

export default App;
