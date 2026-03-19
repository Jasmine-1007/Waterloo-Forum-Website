import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeEvent.module.css";
import EventPanel from "../Elements/EventPanel";
import Button from "../Elements/Button";

function HomeEvent() {
  const cur_eventdetail = {
    id: 1,
    title:
      "House Debate - Should Canada ban social media for children under 16?",
    date: "2026 - 03 - 26",
    location: "E6 4022, University of Waterloo",
    detail: [
      "Should social media be banned for teens under 16? As social media has become a large part of how people interact, we have also begun to understand its downsides. Although we have never been more connected and informed, social media brings trade-offs that may outweigh the benefits: addiction, self-esteem issues, and vulnerability to predators. Some jurisdictions have already started to take action with Australia introducing a ban on social media for those under the age of 16. The Waterloo Forum asks, should Canada implement such a ban? Might it have unintended consequences? Come and see this relevant and engaging debate!",
    ],
  };

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
