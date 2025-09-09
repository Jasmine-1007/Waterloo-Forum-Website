import React from 'react';
import styles from './PastEventPage.module.css';
import Button from '../Elements/Button';
import Card from '../Elements/Card';
import EventPanel from '../Elements/EventPanel';


const pastVideos = [
  {
    id: 1,
    title: "Past event one ",
    date: "2025-06-12",
    youtubeId: "CfZdGgsbcoo"},
  ]



// Sample event details
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
]

function PastEventPage() {
  return (

    <section className={styles.section} aria-labelledby="past-events-heading">
      <div className={styles.pasteventheader} >
      <div className={styles.headerRow}>
        <h2 id="past-events-heading" className={styles.title}>Past Events</h2>
      </div>
      </div>
      <h2 style={{borderBottom: '1px solid black', margin: '20px 30px', textAlign: 'start'}} >Summer 2025</h2>
      <div className={styles.panel}>
        <h3 style={{fontSize: '25px', textAlign: 'start', margin:'70px'}} >• Pilot Debate</h3>
       <EventPanel 
       eventdetail={pastEvent}
                   imgSrc={"/groupphoto.jpg"}
                   imgAlt={"pilot debate poster"}/>
            <h3 className={styles.h3highlight} >Speakers:</h3>
         <div className={styles.speakerSection}>
            {speakers.map((s) => {
              return (
            <article key={s.id} className={styles.speakerCard}>
              <img className={styles.speakerImage} src={s.photo}></img>
              <p className={styles.speakerName} >{s.name}</p>
              <p className={styles.speakerBio} >{s.role}</p>
            </article> );
            })}
            
        
          </div>
    </div>
      <h3 className={styles.h3highlight}> Watch here:</h3>

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
    <p>On July 32st, 2025, we hosted our first pilot debate as a kickoff for the club.</p>
              <p className={styles.meta}>{v.date}</p>
            </div>
          </article>
        ))}
      </div>
      <button className='continue-button' style={{marginTop: '20px', fontSize: '15px'}} onClick={() => window.open("https://www.youtube.com/@DRMSH", "_blank")}>
  <em>Watch on Our YouTube Channel</em> ➙
</button>

    </section>
  )
}

export default PastEventPage; 