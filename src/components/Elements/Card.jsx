import React from 'react';
import styles from "./Card.module.css";
import style from "./Button.module.css";
import Button from './Button';
import { Link } from 'react-router-dom';

function Card({children, btnlink}) {
  return (
    <section className={styles.cardsection}>
        <div className={styles.cardcontainer}>
          <div className={styles.headingline}>
            <div className={styles.title} >
            <img style={{width: '30px', height:"30px", color: 'white'}} src='/assets/emailicon.webp'></img>
              <h4 style={{color: 'white'}}> {children[0]}</h4>

            </div>
            <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={style.buttonrounder}><Link style={{color: 'white', letterSpacing: '0.9px', whiteSpace: 'nowrap'}} to={btnlink}>{children[1]}</Link></Button>
            </div>
            <p style={{color: 'white', marginBottom: '0.8rem', marginTop: '0'}}>{children[2]}</p>
        </div>
    </section>
  )
}

export default Card