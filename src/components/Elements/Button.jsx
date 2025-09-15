import React from 'react';
import styles from "./Button.module.css";


function Button({href, children, onClick, style, className= ''}) {
  if(href){
    return (
      <a
        href={href}
       
        target="_blank"   // opens in a new tab
        rel="noopener noreferrer" // security best practice
       className={`${styles.button} ${className}`} style={style} onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={`${styles.button} ${className}`} style={style} onClick={onClick}>{children}</button>
  )
}

export default Button;