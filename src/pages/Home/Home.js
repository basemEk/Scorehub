import React from 'react'
import slider1 from '../../assets/landing-banner.png';
import slider2 from '../../assets/landing-banner-2.png';
import ThreeDCarousel from '../../components/ThreeDCarousel/ThreeDCarousel';


export default function Home() {
  return (
    <>
    <div>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner homeBanner">
            <div className="carousel-item active">
              <img src={slider1} className="d-block w-100" alt="banner 1" />
            </div>
            <div className="carousel-item homeBanner">
              <img src={slider2} className="d-block w-100" alt="banner 2" />
            </div>
          </div>
        </div>   
        
        <ThreeDCarousel />    
      </div>
    
    </>
  )
}
