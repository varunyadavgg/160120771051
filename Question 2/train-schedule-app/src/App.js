
import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import AuthenticationForm from "./components/AuthenticationForm";
import TrainDetails from "./components/TrainDetails";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import{Routes} from 'react-router-dom';

function App() {

  <Router>
<Navbar>
<Routes>
<Route path="/RegistrationForm" element={<RegistrationForm />} >
    
    
  </Route> 

  <Route path="/AuthenticationForm" element={<AuthenticationForm /> }> 
    
  </Route> 

  <Route path="/TrainDetails" element={<TrainDetails />}>
    
  </Route> 
</Routes>
</Navbar>

</Router>
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
