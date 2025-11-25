import React from 'react';
import styles from './PastEvent.module.css';
import Button from '../Elements/Button';


const pastVideos = [
  {
    id: 1,
    title: "Pilot Debate | Should Universities Lift Restrictions on AI?",
    date: "2025-07-31",
    youtubeId: "jbwb2d1dGr0"},
    {
      id: 2,
    title: "Will AI Undermine Democratic Institutions?",
    date: "2025-09-17",
    youtubeId: "cYd-Y11nYSM"}
]

function PastEvent() {
  return (

    <section className={styles.section} aria-labelledby="past-events-heading">
      <div className={styles.headerRow}>
        <h2 id="past-events-heading" className={styles.title}>Watch Our Past Events Here👇</h2>
      </div>

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
              <p className={styles.meta}>{v.date}</p>
            </div>
          </article>
        ))}
      </div>
      <button className='continue-button' style={{marginTop: '20px', fontSize: '15px'}} onClick={() => window.open("https://www.youtube.com/@DRMSH", "_blank")}>
  <em>Visit Our YouTube Channel ➙</em> 
</button>

    </section>
  )
}

export default PastEvent;