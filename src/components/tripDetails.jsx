import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import trips from "../data";

const TripDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const trip = trips.find(
    (item) => item.id === Number(id)
  );

  if (!trip) {
    return <h2>Trip not found</h2>;
  }

  return (
    <div className="details-page">

      <div className="details-container">

        <img
          src={trip.image}
          alt={trip.title}
        />

        <div className="details-content">

          <p className="location">
            {trip.location}
          </p>

          <h1>{trip.title}</h1>

          <p className="description">
            {trip.description}
          </p>

          <div className="details-grid">

            <div>
              <strong>Duration</strong>
              <p>{trip.days}</p>
            </div>

            <div>
              <strong>Cost</strong>
              <p>{trip.cost}</p>
            </div>

            <div>
              <strong>Transport</strong>
              <p>{trip.bus}</p>
            </div>

            <div>
              <strong>Food</strong>
              <p>{trip.food}</p>
            </div>

            <div>
              <strong>Trip Type</strong>
              <p>{trip.type}</p>
            </div>

            <div>
              <strong>Hotel</strong>
              <p>{trip.hotel}</p>
            </div>

            <div>
              <strong>Timing</strong>
              <p>{trip.timing}</p>
            </div>

            <div>
              <strong>Group</strong>
              <p>{trip.group}</p>
            </div>

          </div>

          <div className="confirm-box">

            <h3>
              Do you want to confirm this trip?
            </h3>

            <button
              className="confirm"
              onClick={() =>
                navigate(`/contact?trip=${trip.id}`)
              }
            >
              Yes, Confirm Trip
            </button>

            <button
              className="cancel"
              onClick={() => navigate("/")}
            >
              Maybe Later
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TripDetails;