import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./HomeEvent.module.css";
import EventPanel from '../Elements/EventPanel';
import Button from '../Elements/Button';



function HomeEvent() {



const eventdetail  = {
    id: 1,
    title: "Will AI undermine Canadian Democratic Institutions?",
    date: "2025 - 09 - 17",
    location: "E7 Event Space, University of Waterloo",
    detail: ["Artificial Intelligence is increasingly present in our lives. We see its impact on social media. We use it to translate, write emails, gain an edge on the stock market, drive cars, and even think for us. Many believe that this is just the start. Artificial Intelligence may have the power to disrupt the very foundations of how we live. One of those foundations is our country, Canada. Many of us are grateful to live in a country with an elected government, independent courts, social services, and civil liberties. In a time when the world anticipates the disruption that AI may bring, The Waterloo Forum asks, 'Will AI undermine Canadian democratic institutions?'","Join The Waterloo Forum and its guests Dr. Paul Ward, Dr. Jesse Hoey, Dr. Florian Kerschbaum, and Dr. Matthew Silk in debating this pressing question. The debate will be held on September 17 at 6:30 pm in the E7 2nd Floor Event Space. Bring your questions and an open mind!"]
    
}

  return (
    <div className={styles.eventSection}>
       <div className={styles.header}> <div className={styles.heading}><h2>Upcoming Event</h2></div></div>
       <div style={{display: "none"}} className={styles.eventContent}>
       <EventPanel eventdetail={eventdetail}
                   imgSrc={"/place/e7.png"}
                   imgAlt={"e7Image"}/>
    
    <div>
        <h2 style={{margin: '3.5rem'}}>Register Now!</h2>
        <Button href="https://forms.cloud.microsoft/r/bzAGeWnHg5" style={{width: "150px", margin: "50px auto"}}>REGISTER TODAY</Button>
        </div>
        </div>
        <div><h2>Stay tuned for more upcoming events!</h2></div>
    </div>
  )
}

export default HomeEvent;