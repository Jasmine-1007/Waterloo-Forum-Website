import React from 'react'
import "./Sign-up.css"
function Signup() {
  return (
    <div className='welcome-container' style={{border: 'none'}}>
        <main>
            <h1>Membership Form</h1>
            <h2 style={{fontSize: "30px"}}>Sign up to become a member now!</h2>
        <form className='sign-up-form'>

                <div className='firstName'>
                <label>First Name: <span style={{ color: "red" }}>*</span></label>
                <input type="text" name="fname" required></input>
                </div>
                <div className='lastName'>
                <label>Last Name: <span style={{ color: "red" }}>*</span></label>
                <input type="text" name="lname" required></input>
                </div>
                <div className='Email'>
                <label>Email: <span style={{ color: "red" }}>*</span></label>
                <input type="text" name="email" required></input>
                </div>
                <div className='selectStudent'>
                    <label>Are you a student? </label>
                    <select name='student'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className='selectYear'>
                    <label>If so, which year are you in? </label>
                    <select name='student'>
                        <option value="one">First</option>
                        <option value="two">Second</option>
                        <option value="three">Third</option>
                        <option value="four">Fourth</option>
                        <option value="five">Fifth</option>
                    </select>
                </div>

                <button style={{backgroundColor: "none"}}>Join</button>
        </form>
        </main>
    </div>
  )
}

export default Signup;
