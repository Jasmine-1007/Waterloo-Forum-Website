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
          Founded by current president Jordan Bauman, The Waterloo Forum was created to spark conversation on campus. Nowadays, debate is often shallow and hostile. The Waterloo Forum is here initiate the discussions that matter in a respectful, academic context. We engage experts, with diverse viewpoints, to weigh in on current issues. 
        </p>
        <Link to="/About" className="continue-button">About Us</Link>
      </div>/
    </div>
  );
};

export default OurHistory;
