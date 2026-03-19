import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeEvent.module.css";
import EventPanel from "../Elements/EventPanel";
import Button from "../Elements/Button";
import { cur_eventdetail } from "./EventData";


function HomeEvent() {
  
  

  return (
    <div className={styles.eventSection}>
      <div className={styles.header}>
        {" "}
        <div className={styles.heading}>
          <h2>Upcoming Event</h2>
        </div>
      </div>
      <div 
      // style={{ display: "none" }} 
      className={styles.eventContent}>
        <EventPanel
          eventdetail={cur_eventdetail}
          imgSrc={"/assets/social-media.jpg"}
          imgAlt={"SocialMediaAppsImage"}
        />
        <div>
          <h2 style={{ margin: "3.5rem" }}>Register Now!</h2>

          {/* add href for form later  */}
          <Button style={{display: "none", width: "150px", margin: "50px auto" }}>
            REGISTER TODAY
          </Button>
        </div>
      </div>
      <div>
        <h2>Stay tuned for more upcoming events!</h2>
      </div>
    </div>
  );
}

export default HomeEvent;
