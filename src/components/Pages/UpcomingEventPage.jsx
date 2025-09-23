import React from "react";
import styles from "./PastEventPage.module.css";
import Button from "../Elements/Button";
import Card from "../Elements/Card";
import Event from "../UI/Event";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// Sample event details
const AIDebateDetail = {
  event: "AI Debate",
  title: "Will AI undermine Canadian Democratic Institutions?",
  date: "Sept.17th, 2025",
  detail:
    "On July 31st, 2025, we hosted our first pilot debate as a kickoff for the club. The event featured engaging insights into the ethical implications of AI from both the technical and social perspectives.",
};

const speakers = [
  {
    id: "1",
    name: "Dr. Paul Ward",
    role: "Associate Professor, Associate Director, Software Engineering",
    photo: "/speakers/Paulward.png",
  },
  {
    id: "2",
    name: "Dr. Florian Kerschbaum",
    role: "Professor, Computer Science. Former executive director of the Waterloo Cybersecurity and Privacy Institute",
    photo: "/speakers/Kerschbaum.png",
  },
  {
    id: "3",
    name: "Dr. Jesse Hoey",
    role: "Professor and Director of Graduate Studies, Computer Science",
    photo: "/speakers/Jessehoey.png",
  },
  {
    id: "4",
    name: "Dr. Matthew Silk",
    role: "Instructor, AI in Education & Training, Machine Learning & Deep Learning",
    photo: "/speakers/Matthewsilk.png",
  },
];

function UpcomingEventPage() {
  function AIDebate() {}
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const loc = document.querySelector(location.hash);
        if (loc) {
          loc.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });
  return (
    <section className={styles.section} aria-labelledby="past-events-heading">
      <div className={styles.pasteventheader}>
        <div className={styles.imageContainer}>
          <img src="/pilot/debaters1.png" alt="Event Header" />
          <div className={styles.headerRow}>
            <h2 id="past-events-heading" className={styles.overlayTitle}>
              Upcoming Events
            </h2>
          </div>
        </div>
      </div>
      <h2 id="aidebate" className={styles.eventTitle}>
        Fall 2025
      </h2>
      <Event style={{display: "none"}} speaker = {speakers}
      pastEvent = {AIDebateDetail}
    />
    <h2>Stay Tuned for more Upcoming Events!</h2>
      

      {/* <div className={styles.grid}>
        
        {pastVideos.map((v) => (
          <article key={v.id} className={styles.card}>
            <div className={styles.mediaWrap}>
              <iframe
                className={styles.iframe}
                src={`https://www.youtube.com/embed/${v.youtubeId}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className={styles.body}>
              <h3 className={styles.h3}>{v.title}</h3>
    <p>On July 32st, 2025, we hosted our first pilot debate as a kickoff for the club.</p>
              <p className={styles.meta}>{v.date}</p>
            </div>
          </article> */}
      {/* ))} */}
      {/* </div>
      <button className='continue-button' style={{marginTop: '20px', fontSize: '15px'}} onClick={() => window.open("https://www.youtube.com/@DRMSH", "_blank")}>
  <em>Watch on Our YouTube Channel</em> ➙
</button> */}
    </section>
  );
}

export default UpcomingEventPage;
