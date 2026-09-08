import React from "react";
import { useNavigate } from "react-router-dom";
import trips from "../data";
import "../style.scss";

const Home = () => {

  const navigate = useNavigate();

  const handleTripClick = (id) => {

    const user = localStorage.getItem("travelUser");

    console.log("User:", user);
    console.log("Trip ID:", id);

    if (user === "true") {
      navigate(`/trip/${id}`);
    } else {
      navigate(`/signup/${id}`);
    }

  };

  return (
    <div className="home">

      <div className="hero" >
        <h1 >Explore The World</h1>
        <p>Discover beautiful places with us</p>
      </div>

      <section className="trips-section">

        <h2>Popular Trips</h2>

        <div className="trip-container">

          {trips.map((trip) => (

            <div
              className="trip-card"
              key={trip.id}
            >

              <img
                src={trip.image}
                alt={trip.title}
              />

              <div className="trip-card-content">

                <h3>{trip.title}</h3>

                <p>{trip.location}</p>

                <p>{trip.days}</p>

                <h4>{trip.cost}</h4>

                <button
                  type="button"
                  onClick={() => handleTripClick(trip.id)}
                >
                  Explore Trip
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;