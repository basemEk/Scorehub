import React from 'react'
import './Footer.css'
import contact from '../../assets/phone.png'
import email from '../../assets/email.png'
import location from '../../assets/location.png'
import facebook from '../../assets/fb-xd.png'
import twiter from '../../assets/twitter-xd.png'
import linkedin from '../../assets/in-xd.png'
import youtube from '../../assets/youtube-xd.png'
import instagram from '../../assets/insta-xd.png'
import eduverseFooter from '../../assets/Eduverslogo-b&w.png'


export default function Footer() {
  return (
    <div>
        <div class="container mt-5">
            <div class="row align-items-center">
              <div class="col-md-5 text-center text-md-start mb-5 lets-get-intouch">
                <h1>
                  Let’s get in touch
                </h1>
                <p className='col-lg-9 text-muted'>A few lines about why should people get in touch with scoreHub…</p>
              </div>
            </div>
          </div>

          <div className='row ms-4 px-5'>
            <div className='col-lg-4 col-md-4 col-sm-12 contact-description'>
                <img src={contact} alt="contact us" />
                <div className='pt-3 footer-contacts'>Phone numbers here: 12345657890</div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 contact-description'>
                <img src={email} alt="email us" />
                <div className='pt-3 footer-contacts'>Emails here: email@email.com</div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 contact-description">
                <img src={location} alt="email us" />
                <div className='pt-3 footer-contacts'>Addresses & locations here:<br/> Beirut:…….. Dubai:……..</div>
            </div>
          </div>

        <div className='subscribe-container mt-5 px-2 pb-5'>
            <div class="container subscribe">
                <div class="row align-items-center pt-2">
                    <div class="col-md-5 pt-5 text-center text-md-start mb-2">
                        <h1 className='text-light'>
                            Subscribe to our newsletter
                        </h1>
                        <p className='col-lg-9 text-light'>A few lines about why should people get in touch with scoreHub…</p>
                    </div>
                </div>

             <form className='subscribe-inputs row d-flex'>
                <div className='col-lg-2 col-md-2 col-sm-12 me-5'>
                    <input type="email" placeholder=" Enter your Email" className='subscribe-email-input rounded-2 border-0' />
                </div>
                <div className='col-lg-2 col-sm-12 text-md-start mt-0'>
                    <input type="submit" className="btn btn-light ms-lg-5 subscribe-btn" value="Subscribe"/>
                </div>
            </form> 
          </div>
        </div>

        <footer class="bg-dark text-light py-5">
          <div class="container">
            <div class="row footer-row">
              <div class="col-md-2 footer-logo d-sm-flex justify-content-center">
                <a href=""><h4><img src={eduverseFooter} alt="" class='edu-footer' /></h4></a>
              </div>
              <div class="col-md-3">
                <ul class="list-inline d-flex justify-content-lg-end justify-content-center social-icons">
                  <a href=""><li><img src={twiter} alt="" width="32px"/></li></a>
                  <a href=""><li><img src={facebook} alt="" width="32px"/></li></a>
                  <a href=""><li><img src={linkedin} alt="" width="32px"/></li></a>
                  <a href=""><li><img src={instagram} alt="" width="32px"/></li></a>
                  <a href=""><li><img src={youtube} alt="" width="32px"/></li></a>
                </ul>
              </div>
              <div class="col-md-5">
                <ul class="d-lg-flex justify-content-between footer-navs">
                  <li><a href="#">ABOUT US</a></li>
                  <li><a href="#courses-carousel">COURSES</a></li>
                  <li><a href="#">OUR FOUNDER</a></li>
                  <li><a href="#">BLOG</a></li>
                  <li><a href="#">CONTACT US</a></li>
                </ul>
              </div>
              <div class="col-md-2 d-flex justify-content-lg-end justify-content-center policy-terms">
                <p className="me-4">TERMS</p>
                <p>POLICY</p>
              </div>
            </div>
          </div>
        </footer>

    </div>
  )
}
