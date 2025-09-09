import React from 'react';
import styles from "./Card.module.css";
import Button from './Button';
import { Link } from 'react-router-dom';

function Card({children}) {
  return (
    <section className={styles.cardsection}>
        <div className={styles.cardcontianer}>
            <div><h4>{children[0]}</h4>

            <img style={{width: '20px', height:"20px"}} src='/email.svg'></img>
            </div>
            <Link to={'../UI/Sign-up.jsx'}><Button>{children[1]}</Button></Link>
            <p>{children[2]}</p>
        </div>
    </section>
  )
}

export default Card