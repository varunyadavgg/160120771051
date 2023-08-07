// api.js

const BASE_URL = "http://20.244.56.144:80/train";

export async function registerCompany(data) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const registrationData = await response.json();
    return registrationData;
  } else {
    throw new Error("Registration failed. Please check your request and try again.");
  }
}

export async function authenticate(clientID, clientSecret) {
  const response = await fetch(`${BASE_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clientID,
      clientSecret,
    }),
  });

  if (response.ok) {
    const authData = await response.json();
    return authData;
  } else {
    throw new Error("Authentication failed. Please check your credentials and try again.");
  }
}

export async function getAllTrains(authToken) {
  const response = await fetch(`${BASE_URL}/trains`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (response.ok) {
    const trainData = await response.json();
    return trainData;
  } else {
    throw new Error("Failed to fetch train data. Please try again later.");
  }
}

export async function getTrainDetails(trainID, authToken) {
  const response = await fetch(`${BASE_URL}/trains/${trainID}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (response.ok) {
    const trainDetails = await response.json();
    return trainDetails;
  } else {
    throw new Error("Failed to fetch train details. Please try again later.");
  }
}
