import React from 'react';
import styles from "./Card.module.css";
import style from "./Button.module.css";
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';

function Card({children, btnlink}) {
  const navigate = useNavigate();

  const handleClick = () => {
  navigate(btnlink);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <section className={styles.cardsection}>
        <div className={styles.cardcontainer}>
          <div className={styles.headingline}>
            <div className={styles.title} >
            <img style={{width: '30px', height:"30px", color: 'white'}} src='/assets/emailicon.webp'></img>
              <h4 style={{color: 'white'}}> {children[0]}</h4>

            </div>
            <Button onClick={handleClick} className={style.buttonrounder}  style={{color: 'white', letterSpacing: '0.9px', whiteSpace: 'nowrap'}}>{children[1]}</Button>
            </div>
            <p style={{color: 'white', marginBottom: '0.8rem', marginTop: '0'}}>{children[2]}</p>
        </div>
    </section>
  )
}

export default Card