// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Elements/Button';
import './Header.css';


const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='navbar'>
    <div className='navbarcontent' >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div className="dropdown">
          <Link className="dropbtn" to='#'>Event</Link>
          <div className="dropdown-content" >
            <Link to="/event/pastevent">Past Events</Link>
            <Link to="/event/upcomingevent">Upcoming Events</Link>
          </div>
        </div>
        {/* <Link to="/signup" className='join-us-button'>Join Us</Link> */}
      </nav>
      
        <Button onClick={() => navigate("/signup")}>Join Us</Button>
        </div>
    </header>
  );
};

export default Header;
