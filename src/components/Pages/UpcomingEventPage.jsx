import React from 'react';
import styles from './PastEventPage.module.css';
import Button from '../Elements/Button';
import Card from '../Elements/Card';
import EventPanel from '../Elements/EventPanel';




// Sample event details
const pastEvent = {
  title: 'Will AI undermine Canadian Democratic Institutions?',
  date: 'Sept.17th, 2025',
  detail:
    'On July 31st, 2025, we hosted our first pilot debate as a kickoff for the club. The event featured engaging insights into the ethical implications of AI from both the technical and social perspectives.',
};

const speakers = [{
    id: '1',
    name: 'Dr. Paul Ward',
    role: 'Associate Professor, Associate Director, Software Engineering',
    photo: '/speakers/Paulward.png',
},
{
    id: '2',
    name: 'Dr. Florian Kerschbaum',
    role: 'Professor, Computer Science. Former executive director of the Waterloo Cybersecurity and Privacy Institute',
    photo: '/speakers/Kerschbaum.png', 
},
{
  id: '3',
  name: 'Dr. Jesse Hoey',
    role: 'Professor and Director of Graduate Studies, Computer Science',
    photo: '/speakers/Jessehoey.png',
},
{
  id: '4',
  name: 'Dr. Matthew Silk',
    role: 'Instructor, AI in Education & Training, Machine Learning & Deep Learning',
    photo: '/speakers/Matthewsilk.png',
}]


function UpcomingEventPage() {
  return (

    <section className={styles.section} aria-labelledby="past-events-heading">
      <div className={styles.pasteventheader} >
      <div className={styles.headerRow}>
        <h2 id="past-events-heading" className={styles.title}>Upcoming Events</h2>
      </div>
      </div>
      <h2 style={{borderBottom: '1px solid black', margin: 'auto 30px', textAlign: 'start'}} >Fall 2025</h2>
      <div className={styles.panel}>
        <h3 style={{fontSize: '25px', textAlign: 'start', marginLeft:'30px'}} >• AI Debate</h3>
       <EventPanel 
       eventdetail={pastEvent}
                   imgSrc={"/groupphoto.jpg"}
                   imgAlt={"pilot debate poster"}/>
            <h3  style={{textAlign: 'start', marginLeft: '70px', marginTop: '70px'}}>Speakers:</h3>
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
  )
}

export default UpcomingEventPage; 