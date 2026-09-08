import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ShowAdmin = () => {

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  function getData() {

    axios
      .get(
        "https://6a853c429c451dc67a63655b.mockapi.io/tripCrud"
      )
      .then((res) => {
        setData(res.data);
      });

  }

  const handleDelete = (id) => {

    axios
      .delete(
        `https://6a853c429c451dc67a63655b.mockapi.io/tripCrud/${id}`
      )
      .then(() => {
        getData();
      });

  };

  const handleLogout = () => {

    localStorage.removeItem("travelUser");

    navigate("/");

  };

  useEffect(() => {
    getData();
  }, []);

  return (

    <div className="admin-bookings-page">

      <div className="admin-bookings-header">

        <div>

          <h2>Booking Details</h2>

          <p>
            Manage all your trip booking requests
          </p>

        </div>

        <div className="admin-header-buttons">

          <Link
            to="/"
            className="home-btn"
          >
            ← Back to Home
          </Link>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Log Out
          </button>

        </div>

      </div>

      <div className="booking-table-wrapper">

        <table className="booking-table">

          <thead>

            <tr>

              <th>ID</th>

              <th>Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>People</th>

              <th>Trip Name</th>

              <th>Amount</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {data.map((eachData) => (

              <tr key={eachData.id}>

                <td className="booking-id">
                  #{eachData.id}
                </td>

                <td>
                  {eachData.name}
                </td>

                <td>
                  {eachData.email}
                </td>

                <td>
                  {eachData.phone}
                </td>

                <td className="people-count">
                  {eachData.people}
                </td>

                <td>
                  {eachData.tripName}
                </td>

                <td className="booking-amount">
                  ₹{Number(eachData.amount).toLocaleString("en-IN")}
                </td>

                <td>

                  <button
                    className="delete-booking-btn"
                    onClick={() =>
                      handleDelete(eachData.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
};

export default ShowAdmin;