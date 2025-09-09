import React from 'react';
import './OurHistory.css'; 
import { Link } from 'react-router-dom';

// For styling
function OurHistory(){
  return (
    <div className="history-section">
      <div className="image-container">
        <img 
          src="/debateHall.png" 
          alt="debate hall" 
          className="history-image" 
        />
      </div>
      <div className="text-container">
        <h2>Our History</h2>
        <p>
          Our benefactor, Mr. Willis S. McLeese, wanted to ensure that students within Canada 
          would learn communication and leadership skills. Today, we continue his legacy 
          across Canada working with various groups, schools, and communities to ensure that 
          no child is left behind.
        </p>
        <Link to="/About" className="continue-button">About Us</Link>
      </div>/
    </div>
  );
};

export default OurHistory;
