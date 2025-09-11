import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Elements/Button";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="navbarcontent">
        <div className="logo-and-toggle">
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <div className="dropdown">
            <a className="dropbtn">Event</a>
            <div className="dropdown-content">
              <div className="sub-dropdown">
                <Link to="/event/pastevent" onClick={() => setIsOpen(false)}>Past Events</Link>
                <div className="sub-dropdown-content">

                  <Link to="/event/pastevent#pilot" onClick={() => setIsOpen(false)} >Pilot Debate →</Link>
                </div>
              </div>
              <div className="sub-dropdown">
                <Link to="/event/upcomingevent" onClick={() => setIsOpen(false)}>Upcoming Events</Link>
                <div className="sub-dropdown-content">
                  <Link to="/event/upcomingevent#aidebate" onClick={() => setIsOpen(false)}>AI Debate →</Link>
                </div>
              </div>
            </div>
          </div>
           <Link to="/contact-us" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </nav>

        <Button
          onClick={() => {
            window.scrollTo()
            setIsOpen(false);
            navigate("/sign-up");
          }}
          className="join-button"
        >
          Join Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
