import React from 'react';
import styles from './PastEventPage.module.css';
import Button from '../Elements/Button';
import Card from '../Elements/Card';
import EventPanel from '../Elements/EventPanel';
import { useLocation} from 'react-router-dom';
import { useEffect } from 'react';



const pastVideos = [
  {
    id: 1,
    title: "Pilot Debate | Should Universities Lift Restrictions on AI?",
    date: "2025-06-12",
    youtubeId: "jbwb2d1dGr0",
  },
   {
    id: 2,
    title: "Will AI Undermine Democratic Institutions?",
    date: "2025-09-17",
    youtubeId: "cYd-Y11nYSM",
  },
];

const pilotEvent = {
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

const Pilotspeakers = [
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

const AIDebateDetail = {
  event: "AI Debate",
  title: "Will AI undermine Canadian Democratic Institutions?",
  date: "Sept.17th, 2025",
  detail:
    "AI is getting increasingly capable in shaping people's political perspectives and has penetrated Canadian democratic institutions including government agencies to help make decisions and speed up administration. Should we be concerned to give it more power to interfere with out democracy?",
};

const AIspeakers = [
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


const GradHouseDetail = {
  event: "Close Conversations",
  title: "Do universities have a duty to restrict controversial speech on campus?",
  date: "Nov.3rd 7pm, 2025",
  location: "Grad House",
  detail: "Join The Waterloo Forum for our discussion on the topic: “Do universities have a duty to restrict controversial speech on campus?” This event will bring students together on campus for an open exchange of ideas on the balance between free expression, academic values, and community responsibility. Participants will have the opportunity to share perspectives and ask questions in small-group discussions. Guided by thought-provoking prompts, we will reflect on the role universities play in fostering both intellectual freedom and respectful discourse.",
  postersrc: "/Posters/CloseConversation.png"

}

function PastEventPage() {


  const location = useLocation();

  useEffect(()=> {
    if(location.hash){
      setTimeout(()=> {
        const loc = document.querySelector(location.hash);
        if(loc){
          loc.scrollIntoView({behavior: 'smooth' });
        }
      })
    }
  })

  return (
    <section className={styles.section} aria-labelledby="past-events-heading">
      <div className={styles.imageContainer}>
  <img src="/groupphoto.jpg" alt="Event Header" />
  <h2 class={styles.overlayTitle}>Past Events</h2>
</div>

      <h2 id='pilot' className={styles.eventTitle}>Summer 2025</h2>
      <div  className={styles.panel}>
        <h3 className={styles.eventSubtitle}>• Pilot Debate</h3>
        <EventPanel
          eventdetail={pilotEvent}
          imgSrc="/pilot/debaters1.png"
          imgAlt="pilot debate poster"
        />
        <h3 className={styles.h3highlight}>Speakers:</h3>
        <div className={styles.speakerSection}>
          {Pilotspeakers.map((s) => (
            <article key={s.id} className={styles.speakerCard}>
              <img className={styles.speakerImage} src={s.photo} alt={s.name} />
              <p className={styles.speakerName}>{s.name}</p>
              <p className={styles.speakerTitle}>{s.role}</p>
              <p className={styles.speakerBio}>{s.bio}</p>
            </article>
          ))}
        </div>
      </div>
      <h2 id='pilot' className={styles.eventTitle}>Fall 2025</h2>
      <div  className={styles.panel}>
        <h3 className={styles.eventSubtitle}>• AI Debate</h3>
        <EventPanel
          eventdetail={AIDebateDetail}
          imgSrc="/Posters/AIDebate.jpg"
          imgAlt="ai debate poster"
        />
        <h3 className={styles.h3highlight}>Speakers:</h3>
        <div className={styles.speakerSection}>
          {AIspeakers.map((s) => (
            <article key={s.id} className={styles.speakerCard}>
              <img className={styles.speakerImage} src={s.photo} alt={s.name} />
              <p className={styles.speakerName}>{s.name}</p>
              <p className={styles.speakerTitle}>{s.role}</p>
              <p className={styles.speakerBio}>{s.bio}</p>
            </article>
          ))}
        </div>
      </div>
      <div  className={styles.panel}>
        <h3 className={styles.eventSubtitle}>• Closed Conversation</h3>
        <EventPanel
          eventdetail={GradHouseDetail}
          imgSrc="/Posters/CloseConversation.png"
          imgAlt="close conversation poster"
        />
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
