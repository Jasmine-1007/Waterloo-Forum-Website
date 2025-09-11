import React from 'react';
import styles from "./Button.module.css";


function Button({children, onClick, style, className= ''}) {
  return (
    <button className={`${styles.button} ${className}`} style={style} onClick={onClick}>{children}</button>
  )
}

export default Button;