import React, {useState} from 'react'
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



     const [student, setStudent] = useState(null);
  const [year, setYear] = useState(null);
    const navigate = useNavigate();

    
    const handleSubmit = async (e)=> {

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      fname: formData.get("fname"),
      lname: formData.get("lname"),
      email: formData.get("email"),
      student: student?.value || "",
      year: year?.value || "",
    };
    console.log(data);

    try {
      const response = await fetch("https://formspree.io/f/mwpndykq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate('/sign-up/submit', { state: { message: 'Form submitted successfully!' } });
      } else {
        console.error("Formspree error:", response.statusText);
      }
    } catch (err) {
      console.error("Network error:", err);
    }
  };



  return (
    <div  style={{border: 'none'}}>
        <main className={styles.welcomeContainer}>
            <h2 style={{fontSize: "2rem"}}>Join our Email List!</h2>
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
                    <Select name="student" options={studentOptions}  value={student} onChange={setStudent} styles={{
                        option: (styles,stte)=> ({
                            ...styles, 
                            backgroundColor: stte.isFocused ? '#daab2d50': 'white',
                        })
                    }}></Select>
                </div>
                <div className={styles.selectYear}>
                    <label>If so, which year are you in? </label>
                   <Select name="year" options={yearOptions} value={year} onChange={setYear} styles={{
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
