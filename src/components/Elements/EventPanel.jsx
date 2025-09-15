import React from 'react';
import './EventPanel.css';


function EventPanel({eventdetail, imgSrc, imgAlt}) {
  return (
    <div><section className='mainSection'>
        <div style={{marginBottom:'30px'}} className='descriptionbox'>
            <h3>{eventdetail.title}</h3>
            <p>{eventdetail.date}</p>
            <p>{eventdetail.location}</p>
            <p>{eventdetail.detail[0]}</p>
            <p>{eventdetail.detail[1]}</p>
        </div>
        <div className='image'> <img src={imgSrc} alt={imgAlt} /> </div>
        
        </section></div>
  )
}

export default EventPanel