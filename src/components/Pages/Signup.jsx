import React from 'react'
import styles from "./Signup.module.css";
import Select from "react-select";
import { useNavigate } from 'react-router-dom';



const studentOptions = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
]

const yearOptions = [
   { value: 'First', label: 'First' },
  { value: 'Second', label: 'Second' }, 
{ value: 'Third', label: 'Third' },
  { value: 'Fourth', label: 'Fourth' },
  { value: 'Fifth or more', label: 'Fifth or more' }
]



function Signup() {

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
            <h2 style={{fontSize: "2rem"}}>Sign up to become a member now!</h2>
        <form onSubmit={handleSubmit}
        >
            <div className={styles.signUpForm}>
                <div className={styles.firstName}>
                <label>First Name: <span style={{ color: "red" }}>*</span></label>
                <input type="text" name="fname" required></input>
                </div>
                <div className={styles.lastName}>
                <label>Last Name: <span style={{ color: "red" }}>*</span></label>
                <input type="text" name="lname" required></input>
                </div>
                <div className={styles.Email}>
                <label>Email: <span style={{ color: "red" }}>*</span></label>
                <input type="text" name="email" required></input>
                </div>
                <div className={styles.selectStudent}>
                    <label>Are you a student? </label>
                    <Select name="student" options={studentOptions} styles={{
                        option: (styles,stte)=> ({
                            ...styles, 
                            backgroundColor: stte.isFocused ? '#daab2d50': 'white',
                        })
                    }}></Select>
                </div>
                <div className={styles.selectYear}>
                    <label>If so, which year are you in? </label>
                   <Select name="year" options={yearOptions}  styles={{
                        option: (styles,stte)=> ({
                            ...styles, 
                            backgroundColor: stte.isFocused ? '#daab2d50': 'white',
                        })}}/>
                </div>
                </div>

                <button type='submit' style={{backgroundColor: "none"}}>Join</button>
        </form>
        </main>
    </div>
  )
}

export default Signup;
