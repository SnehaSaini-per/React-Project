import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import trips from "../data";

const Signup = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const trip = trips.find(
    (item) => item.id === Number(id)
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 

  // Fixed password
  

  const handleSignup = (e) => {

    e.preventDefault();

    // Check name and email
    if (!name || !email) {
      alert("Please fill all details");
      return;
    }

    // Check password
   

    // Save user
    localStorage.setItem("travelUser", "true");

    // Go to trip details
    navigate(`/trip/${trip.id}`);
  };

 
  return (
    <div className="signup-page">

      <div className="signup-box">

        <h2>Sign Up</h2>

        <p>
          Sign up once to explore all our trips.
        </p>

        <form onSubmit={handleSignup}>

          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          
          

          <button type="submit">
            Sign Up & Continue →
          </button>

        </form>

      </div>

    </div>
  );
};

export default Signup;