import './Register.css'

import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="login-form">
                <h1>Register Here</h1>
                <form onSubmit="">
                    <label htmlFor="email">First Name : </label> <br />
                    <input type="text" name="" id="firse" />
                    <br />
                    <br />
                    <label htmlFor="email">Last Name : </label> <br />
                    <input type="text" name="" id="last" />
                    <br />
                    <br />
                    <label htmlFor="email">Email : </label> <br />
                    <input type="email" name="email" id="email" />
                    <br />
                    <br />
                    <label htmlFor="password">Password : </label><br />
                    <input type="password" name="password" id="pass" />
                    <br />
                    <label htmlFor="password">Re-Enter Password : </label><br />
                    <input type="password" name="password" id="pass2" />
                    <br /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <div className="create-new-link">
                <p>Already Registered ??</p>
                <button><Link to="/login">Login Here</Link></button>
                </div>
                <br />
                <br />
                <div>-------------Or---------------</div>
                <br />
                <br />
                <br />
                <button className="btn-regular">Sign in with Google</button>
            </div>
    </div>
    );
};

export default Register;