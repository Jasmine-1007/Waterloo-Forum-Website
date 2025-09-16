import React from 'react'
import styles from "./Signup.module.css";
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';



function Feedback() {

    const navigate = useNavigate();

    const handleSubmit = (e)=> {

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
        console.log({key, value});
    }

    navigate('/sign-up/submit', { state: { message: 'Form submitted successfully!' } });


}


  return (
    <div  style={{border: 'none'}}>
        <main className={styles.welcomeContainer}>
            <h2 style={{fontSize: "2rem"}}>Have Feedback? Let Us Know!</h2>
        <form onSubmit={handleSubmit}
        onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // prevents Enter from submitting the form
    }
  }}
        >
            <div className={styles.signUpForm}>
                <div className={styles.firstName}>
                <label>First Name: </label>
                <input type="text" name="fname" ></input>
                </div>
                <div className={styles.lastName}>
                <label>Last Name: </label>
                <input type="text" name="lname" ></input>
                </div>
                <div className={styles.Email}>
                <label>Email: </label>
                <input type="text" name="email" ></input>
                </div>
                <br></br>
                <div className={styles.Feedback}>
                <label>Your Feedback:</label>
                <textarea type="text" name="feedback" rows={4}
                onKeyDown={(e) => {
      if (e.key === 'Enter') {
        e.stopPropagation(); // stop Enter from bubbling to form
      }
    }}
                ></textarea>
                </div>
                </div>

                <button type='submit' style={{backgroundColor: "none"}}>Join</button>
        </form>
        <button><Link to={'/live'}>Live</Link></button>
        </main>
    </div>
  )
}

export default Feedback;
