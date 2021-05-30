// import React, { useState } from 'react';
import './Login.css'

const Login = () => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    // const [imgURL, setImgURL] = useState('');

    return (
        <div style={{height: '80vh'}} className="d-flex align-items-center justify-content-center login">
            <form className="d-flex flex-column">
                <p style={{color: 'dimgray'}} className="text-center">Please Log In Here</p>
                <input className="mb-1" type="text" name="name" placeholder="Enter Full Name" />
                <input className="mb-1" type="text" placeholder="Profile Pic URL" />
                <input className="mb-1" type="email" placeholder="Enter Your Email" />
                <input className="mb-1" type="password" placeholder="Your Password" />
                <button className="login-btn">Sign In</button> <br />
                <p className="text-center" style={{color: 'dimgray'}}>Not a member? <span style={{color: 'blue'}}> Register Now</span></p>
            </form>
        </div>
    );
};

export default Login;