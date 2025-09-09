import React from 'react';
import styles from "./Sponsor.module.css";


function Sponsor() {
  return (
    <section className={styles.sponsorsection}>
    <div className={styles.sponsorcontainer}>
        <h3 className={styles.sponsortitle} >Sponsorship Opportunities</h3>

        <text className={styles.sponsordesciption}>Our benefactor, Mr. Willis S. McLeese, wanted to ensure that students within Canada 
          would learn communication and leadership skills. Today, we continue his legacy 
          across Canada working</text>
        
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