import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrainDetails } from "../api";


const TrainDetails = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrainDetails = async () => {
      try {
        const trainDetails = await getTrainDetails(trainId);
        setTrain(trainDetails);
      } catch (error) {
        console.error("Error fetching train details:", error);
      }
    };

    fetchTrainDetails();
  }, [trainId]);

  if (!train) {
    return <div>Loading train details...</div>;
  }

  return (
    <div>
      <h2>{train.name}</h2>
      <p>Train Number: {train.number}</p>
      <p>Departure Time: {train.departureTime}</p>
      <p>Seats Available: {train.seatsAvailable}</p>
    </div>
  );
};

export default TrainDetails;
