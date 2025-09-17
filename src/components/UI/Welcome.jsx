import React from "react";
import './Welcome.css';


function Welcome(){
    return (
        <div>
            {/* <hr style={{border: "none",display: 'block', height: "2px", background: "#ccc", width: "100vw"}} /> */}
        <div className="welcome-container">

        <h2 className="welcome-title">Welcome to the Waterloo Forum </h2>
        <p className="welcome-subtitle"> Free speech deserves to be cherished</p> 
        <p className="welcome-content">The Waterloo Forum is a student-run initiative that aims to build a culture of open dialogue on campus by hosting public debates. By showcasing civil yet robust debate, we aim to inspire community members to think critically—with one another. </p> 
        </div>
        </div>
    )
}

export default Welcome;