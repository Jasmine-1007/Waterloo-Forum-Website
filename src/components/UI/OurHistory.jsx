import React from 'react';
import './OurHistory.css'; 
import { Link } from 'react-router-dom';

// For styling
function OurHistory(){
  return (
    <div className="history-section">
      <div className="image-container">
        <img 
          src="/place/debateHall.png" 
          alt="debate hall" 
          className="history-image" 
        />
      </div>
      <div className="text-container">
        <h2>Our Story</h2>
        <p>
          Started by current president Jordan Bauman, we exist to create dialogue on campus by
hosting public debates. Our events will
present attendees with new ideas and
deepen their understanding of diverse topics.
We hope that seeing robust debates will
encourage community members to think
deeply with others.
        </p>
        <Link to="/About" className="continue-button">About Us</Link>
      </div>/
    </div>
  );
};

export default OurHistory;
