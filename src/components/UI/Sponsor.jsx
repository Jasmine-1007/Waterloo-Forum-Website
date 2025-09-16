import React from 'react';
import styles from "./Sponsor.module.css";


function Sponsor() {
  return (
    <section className={styles.sponsorsection}>
    <div className={styles.sponsorcontainer}>
        <h3 className={styles.sponsortitle} >Sponsorship Opportunities</h3>

        <text className={styles.sponsordesciption}>The Waterloo Forum is generously sponsored by the Office of Research of Univeristy of Waterloo as part of its initiative to conduct honest and beneficial research on campus, and turn ideas into reality.<br></br>
        Like our initiative? We welcome partners to join this mission of reviving intellectual zeal for opinions.
        Become a sponsor today!</text>
        
    </div>
    <div className={styles.sponsorlogos}>
            <img src='/sponsor/office_of_research.png' alt='officeofresearch'></img>
            <img src='/sponsor/wusa.jpeg' alt='wusa'></img>
            <img src='/sponsor/law.png' alt='law'></img>
        </div>

    </section>
    
  )
}

export default Sponsor