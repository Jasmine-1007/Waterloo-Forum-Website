import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Elements/Button';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='navbar'>
      <div className='navbarcontent'>
        <div className='logo-and-toggle'>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <div className="dropdown">
            <Link className="dropbtn" to="#">Event</Link>
            <div className="dropdown-content">
              <Link to="/event/pastevent" onClick={() => setIsOpen(false)}>Past Events</Link>
              <Link to="/event/upcomingevent" onClick={() => setIsOpen(false)}>Upcoming Events</Link>
            </div>
          </div>
        </nav>

        <Button onClick={() => { setIsOpen(false); navigate("/signup") }} className="join-button">
          Join Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
