import React from 'react'
import './SignUp.css'
import LoginLogo from '../../assets/scorehub-login.png'
import ShowPassword from '../../components/ShowPassword/ShowPassword';


export default function SignUp() {
  return (
    <div className='sign-up-wrapper py-5'>
      <div className='suf'>
      <div className='signup-logoContainer'>
        <img src={LoginLogo} className='signup-logo' alt="login panel" />
      </div>
      <form action="" className='signup-form'>
        <h5>Create your Eduverse Account</h5>
        <label htmlFor="email">Enter Email</label>
        <input type="email" className="signup-email" placeholder="example@hotmail.com" />
        <label htmlFor="password">Enter Password</label>
        <ShowPassword />
        <label htmlFor="password">Repeat Password</label>
        <ShowPassword /><br />
        <input type="submit" value="Sign Up" className="btn btn-dark signup-btn" />
      </form>
      </div>
    </div>
  )
}
