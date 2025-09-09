import React from "react";
import './Welcome.css';


function Welcome(){
    return (
        <div>
            {/* <hr style={{border: "none",display: 'block', height: "2px", background: "#ccc", width: "100vw"}} /> */}
        <div className="welcome-container">

        <h2 className="welcome-title">Welcome to Waterloo Forum </h2>
        <p className="welcome-subtitle"> Free speech deserve to be cherished</p> 
        <p className="welcome-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies semper feugiat. Donec eget lacus quis leo luctus viverra. In dapibus ornare metus. Sed finibus, metus ut semper blandit, eros turpis ullamcorper metus, nec tincidunt quam nulla vulputate velit. Phasellus erat purus, congue id fringilla a, pulvinar vel massa. Nam facilisis, sapien et aliquet porttitor, diam neque semper purus, eu consectetur tellus ex sed tortor. Proin gravida, ipsum non vulputate pretium, ligula diam posuere enim, at porttitor tortor velit quis dui. Sed non risus metus. Duis varius placerat lectus in vestibulum. Nulla eu ex hendrerit lacus fermentum efficitur. Etiam ut magna ut dui ultricies malesuada vitae eget turpis. In rutrum erat quis mauris blandit egestas.</p> 
        </div>
        </div>
    )
}

export default Welcome;