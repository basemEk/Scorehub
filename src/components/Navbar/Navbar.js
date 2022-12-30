import React from 'react'
import './Navbar.css'
import EduverseLogo from '../../assets/Eduvers-logo.svg'

function Navbar() {
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
                <a className="nav-link navbar-light" href="/bundles">BUNDLES</a>
                <a className="nav-link navbar-light" href="/contact-us">CONTACT US</a>
                <div>
                </div>
                <button className="rounded-1 bg-white login-red px-4">LOGIN</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar