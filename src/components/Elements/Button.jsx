import React from 'react';
import styles from "./Button.module.css";


function Button({children, onClick, style}) {
  return (
    <div className={styles.button} style={style} onClick={onClick}>{children}</div>
  )
}

export default Button;