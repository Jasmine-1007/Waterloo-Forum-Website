import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Elements/Button';



function OnSubmit() {

    const location = useLocation();
    const message  = location.state?.message || 'Thank you for submiting your response!';
  return (
    <div style={{padding:'12rem 0'}}>
        <h2>{message}</h2>
        <Link to='/'><Button>Home→</Button></Link>
    </div>
  )
}

export default OnSubmit;