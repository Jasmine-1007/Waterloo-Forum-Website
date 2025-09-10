import React from 'react';
import styles from './PastEventPage.module.css';
import Button from '../Elements/Button';
import Card from '../Elements/Card';
import EventPanel from '../Elements/EventPanel';



const pastVideos = [
  {
    id: 1,
    title: "Past event one",
    date: "2025-06-12",
    youtubeId: "CfZdGgsbcoo",
  },
];

const pastEvent = {
  title: 'Pilot Debate: Be it resolved that university should lift all restrictions on student assignments',
  date: 'July 31st, 2025',
  speaker: {
    name: 'Dr. Jane Doe',
    role: 'AI Researcher at FutureTech',
    photo: '/images/speakers/jane.jpg',
  },
  detail:
    'On July 31st, 2025, we hosted our first pilot debate as a kickoff for the club. The event featured engaging insights into the ethical implications of AI from both the technical and social perspectives.',
};

const speakers = [
  {
    id: '1',
    name: 'Dr. James Nugent',
    role: 'Associate Professor, Teaching Stream, Faculty of Environment',
    photo: '/speakers/Jamesnugent.png',
  },
  {
    id: '2',
    name: 'Dr. James Skidmore',
    role: 'Department Chair, Professor and Director, Waterloo Centre for German Studies',
    photo: '/speakers/Jamesskidmore.png',
  },
];

function PastEventPage() {
  return (
    <section className={styles.section} aria-labelledby="past-events-heading">
      <div className={styles.imageContainer}>
  <img src="/groupphoto.jpg" alt="Event Header" />
  <h2 class={styles.overlayTitle}>Past Events</h2>
</div>

      <h2 className={styles.eventTitle}>Summer 2025</h2>
      <div className={styles.panel}>
        <h3 className={styles.eventSubtitle}>• Pilot Debate</h3>
        <EventPanel
          eventdetail={pastEvent}
          imgSrc="/groupphoto.jpg"
          imgAlt="pilot debate poster"
        />
        <h3 className={styles.h3highlight}>Speakers:</h3>
        <div className={styles.speakerSection}>
          {speakers.map((s) => (
            <article key={s.id} className={styles.speakerCard}>
              <img className={styles.speakerImage} src={s.photo} alt={s.name} />
              <p className={styles.speakerName}>{s.name}</p>
              <p className={styles.speakerTitle}>{s.role}</p>
              <p className={styles.speakerBio}>{s.bio}</p>
            </article>
          ))}
        </div>
      </div>
      <h3 className={styles.h3highlight}>Watch here:</h3>
      <div className={styles.grid}>
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
              <p>{v.date}</p>
            </div>
          </article>
        ))}
      </div>
      <button
        className="continue-button"
        style={{ marginTop: '20px', fontSize: '15px' }}
        onClick={() => window.open("https://www.youtube.com/@DRMSH", "_blank")}
      >
        <em>Watch on Our YouTube Channel</em> ➙
      </button>
    </section>
  );
}

export default PastEventPage;
