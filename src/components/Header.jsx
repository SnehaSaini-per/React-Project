import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "CONTACT US",
    to: "/contact",
  },
  {
    label: "LOG-IN ADMIN",
    to:"/Admin"
  }
];
const Header = () => {
  return (
    <header className="navbar">  
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <span>TravelGo</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="navbar-content-items">
        <ul>
          {
            data.map((item)=>(
              <li key={item.label}>
                <Link to={item.to}>
                {item.label}
                </Link>
                </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;