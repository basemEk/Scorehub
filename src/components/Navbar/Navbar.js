import React, { useState } from 'react';
import './Navbar.css'
import EduverseLogo from '../../assets/Eduvers-logo.svg'
import LoginLogo from '../../assets/scorehub-login.png'
import ShowPassword from '../ShowPassword/ShowPassword';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const closeLogin = () => {
      setIsOpen(false);
    };
    
  
  return (
    <>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-color">
          <div className="container-fluid navbar-scorehub">
            <a className="navbar-brand" href="/"><img src={EduverseLogo} alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/about-us">ABOUT US</a>
                <a className="nav-link navbar-light" href="/courses">COURSES</a>
                <a className="nav-link navbar-light" href="/our-founder">OUR FOUNDER</a>
                <a className="nav-link navbar-light" href="/blogs">BLOG</a>
                <a className="nav-link navbar-light" href="/plans-prices">BUNDLES</a>
                <a className="nav-link navbar-light" href="/contact-us">CONTACT US</a>
                <div>
                </div>

                  {isOpen && <div className="overlay"></div>}
                  <button onClick={togglePopup} className="rounded-1 bg-white login-red px-4">LOGIN</button>
                  {isOpen && (
                    <div className="popup-card">
                      <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={closeLogin} />
                        <div>
                          <img src={LoginLogo} className='login-logo' alt="login panel" />
                        </div>
                          <form action="" className='login-form'>
                            <h5>Login to your account</h5>
                            <label htmlFor="email">Email</label>
                            <input type="email" className="login-email" />
                            <label htmlFor="password">Password</label>
                            <ShowPassword /><br />
                            <p id="forget-pass"><a href="/forget-password">Forget Password?</a></p>
                            <input type="submit" value="LOGIN" className="btn btn-dark login-btn" />
                          </form>
                          <div className='dont-have-account'>
                            <p>Don’t have an account? <a href="/sign-up">Sign up</a></p>
                          </div>
                    </div>
                     )}
                  
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar