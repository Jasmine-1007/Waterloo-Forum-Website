import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./HomeEvent.module.css";
import EventPanel from '../Elements/EventPanel';
import { useNavigate } from 'react-router-dom';
import Button from '../Elements/Button';



function HomeEvent() {

const navigate = useNavigate();


const eventdetail  = {
    id: 1,
    title: "Title of event",
    date: "2025 - 09 - 10",
    location: "E7 Event Space, University of Waterloo",
    detail: "some details"
}

  return (
    <div className={styles.eventSection}>
       <div className={styles.header}> <div className={styles.heading}><h2>Upcoming Event</h2></div></div>
       <EventPanel eventdetail={eventdetail}
                   imgSrc={"/e7.png"}
                   imgAlt={"e7Image"}/>
    
    <div>
        <h2 style={{margin: '40px'}}>Register Now!</h2>
        <Button style={{width: "150px", margin: "20px auto"}} onClick={()=> {navigate("/signup")}}>REGISTER TODAY</Button>
        </div>
    </div>
  )
}

export default HomeEvent;