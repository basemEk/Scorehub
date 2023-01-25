import React from 'react'
import './ThreeDCarousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import reading from '../../assets/reading.png'
import arabic from '../../assets/arabic.png'
import english from '../../assets/english.png'
import skills from '../../assets/skills.png'


export default function ThreeDCarousel() {  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='cards-carousel-home' id="courses-carousel">
      <Slider {...settings}>
      <div className="card-home">
        <img src={reading} className="card-img-top" alt="entrepreneurship course" />
        <div className="card-body">
          <h5 className="card-title">ENTREPRENEURSHIP</h5>
          <p className="card-text">There are several sections available In different versions, but most of them Have fune</p>
          <a href="/entrepreneurship" className="go-somewhere-home">Read More</a>
        </div>
      </div>

      <div className="card-home">
        <img src={skills} className="card-img-top" alt="mindhub course" />
        <div className="card-body">
          <h5 className="card-title">MINDHUB</h5>
          <p className="card-text">There are several sections available In different versions, but most of them Have fune</p>
          <a href="/mindhub" className="go-somewhere-home">Read More</a>
        </div>
      </div>

      <div className="card-home">
        <img src={arabic} className="card-img-top" alt="arabic course" />
        <div className="card-body">
          <h5 className="card-title">ARABIC</h5>
          <p className="card-text">There are several sections available In different versions, but most of them Have fune</p>
          <a href="/arabic-course" className="go-somewhere-home">Read More</a>
        </div>
      </div>

      <div className="card-home">
        <img src={english} className="card-img-top" alt="english course" />
        <div className="card-body">
          <h5 className="card-title">ENGLISH</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/english-course" className="go-somewhere-home">Read More</a>
        </div>
      </div>

      <div className="card-home">
        <img src={arabic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/somewhere" className="go-somewhere-home">Read More</a>
        </div>
      </div>

      </Slider>
    </div>
  );
}