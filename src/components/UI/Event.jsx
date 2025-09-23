import React from 'react';
import {Link} from "react-router-dom";
import styles from "../Pages/PastEventPage.module.css";
import Button from "../Elements/Button";
import Card from "../Elements/Card";
import EventPanel from "../Elements/EventPanel"
import style from "./Footer.module.css";


function Event(props) {
  return (
    <div style={props.style} >
        <div className={styles.panel}>
        <h3 className={styles.eventSubtitle}>{props.pastEvent.event}</h3>
        <EventPanel
          eventdetail={props.pastEvent}
          imgSrc={"/Posters/AIdebate.jpg"}
          imgAlt={"pilot debate poster"}
        />

        <div style={{ marginTop: "4rem" }}>
          <a>
            Seating is limited so{" "}
            <Link to="/sign-up" className={style.titlehighlight}>
              Register Today!
            </Link>
          </a>
        </div>
        <h3
          style={{ textAlign: "start", marginLeft: "70px", marginTop: "70px" }}
        >
          Speakers:
        </h3>
        <div className={styles.speakerSection}>
          {props.speaker.map((s) => {
            return (
              <article key={s.id} className={styles.speakerCard}>
                <img className={styles.speakerImage} src={s.photo}></img>
                <p className={styles.speakerName}>{s.name}</p>
                <p className={styles.speakerBio}>{s.role}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Event;