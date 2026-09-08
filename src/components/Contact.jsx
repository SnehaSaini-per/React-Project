import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import trips from "../data";

const Contact = () => {

  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const tripId = params.get("trip");

  const selectedTrip = trips.find(
    (trip) => trip.id === Number(tripId)
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState("");

  // Trip ki cost se ₹ aur comma remove karke number banana
  const tripPrice = selectedTrip
    ? Number(selectedTrip.cost.replace(/[₹,]/g, ""))
    : 0;

  // Total amount calculate
  const totalAmount = people
    ? tripPrice * Number(people)
    : 0;

  const handleSubmit = (e) => {

    e.preventDefault();

    axios
      .post(
        "https://6a853c429c451dc67a63655b.mockapi.io/tripCrud",
        {
          name: name,
          email: email,
          phone: phone,
          people: people,
          tripName: selectedTrip ? selectedTrip.title : "",
          amount: totalAmount
        }
      )
      .then(() => {

        alert(
          `Thank you ${name}! Your booking request has been received.`
        );

        setName("");
        setEmail("");
        setPhone("");
        setPeople("");

      });

  };

  return (

    <div className="contact-page">

      <div className="contact-container">

        <div className="contact-info">

          <p>GET IN TOUCH</p>

          <h1>
            Let's Plan Your
            <span> Perfect Trip!</span>
          </h1>

          <p>
            Fill in your details and our travel team
            will contact you.
          </p>

          {/* SELECTED TRIP */}

          {selectedTrip && (

            <div className="selected-trip">

              <h3>Selected Trip ✈️</h3>

              <p>
                <strong>Trip:</strong>{" "}
                {selectedTrip.title}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {selectedTrip.location}
              </p>

              <p>
                <strong>Price per person:</strong>{" "}
                {selectedTrip.cost}
              </p>

              {people && (
                <p>
                  <strong>Total Amount:</strong>{" "}
                  ₹{totalAmount.toLocaleString("en-IN")}
                </p>
              )}

            </div>

          )}

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            required
          />

          <input
            type="number"
            placeholder="Number of People"
            value={people}
            min="1"
            onChange={(e) =>
              setPeople(e.target.value)
            }
            required
          />

          {/* TRIP NAME */}

          <input
            type="text"
            value={selectedTrip ? selectedTrip.title : ""}
            readOnly
            placeholder="Selected Trip"
          />

          {/* TOTAL AMOUNT */}

          <input
            type="text"
            value={
              totalAmount
                ? `₹${totalAmount.toLocaleString("en-IN")}`
                : ""
            }
            readOnly
            placeholder="Total Amount"
          />

          <button type="submit">
            Submit Booking
          </button>

        </form>

      </div>

    </div>

  );
};

export default Contact;