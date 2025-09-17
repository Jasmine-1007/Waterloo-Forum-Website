import React from 'react';
import styles from "./Sponsor.module.css";


function Sponsor() {
  return (
    <section className={styles.sponsorsection}>
    <div className={styles.sponsorcontainer}>
        <h3 className={styles.sponsortitle} >Sponsorship Opportunities</h3>

        <text className={styles.sponsordesciption}>The Waterloo Forum is generously sponsored by the University of Waterloo Office of Research and WUSA.<br></br>
        Like our initiative? We welcome sponsors to join us in our mission of sparking intellectual debate.
        Become a sponsor today!</text>
        
    </div>
    <div className={styles.sponsorlogos}>
            <img src='/sponsor/office_of_research.png' alt='officeofresearch'></img>
            <img src='/sponsor/wusa.jpeg' alt='wusa'></img>
            <img style={{width: '250px'}} src='/sponsor/fedy.jpg' alt='law'></img>
        </div>

    </section>
    
  )
}

export default Sponsor