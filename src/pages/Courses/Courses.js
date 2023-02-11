import React from 'react'
import AddToCardBtn from '../../components/AddToCardBtn/AddToCardBtn'
import courses from '../../assets/courses.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Courses.css'
import Chatbot from '../../components/Chatbot/Chatbot'
import cbot from '../../assets/chatbot.png'
import { Helmet } from 'react-helmet-async';


export default function Courses() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        }
      },
      
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      }
    ]
  };


  return (
    <>

    <Helmet>
    <title>Courses</title>
      <meta name="description" content="a level maths online course, accredited french courses online, better social skills, better social skills, improve social skills, social skills elementary, physics class 11, physics class 12, chemistry lessons, chemistry lessons for beginners, english lessons, conversational english lesson plans, english lessons near me"/>

      <link rel="canonical" href="/courses" />

    </Helmet>

    <Chatbot cbot={cbot}/>
      
    <div className='courses-wrapper'>
      <div className='courses-heading-search'>
          <div className='heading-courses'>
            <h1>COURSES</h1>
            <p>Few lines about our courses....</p>
          </div>
          <div className="search-container">
            <form>
              <input type="text" placeholder="Search for Course.." name="search" />
              <button type="submit"><i className="fa fa-search" /></button>
            </form>
          </div>
      </div>

      <div className='slickCourseWrapper'>
        <Slider {...settings}>
        <div className='cs'>
          <div className='slickCourseContainer'>
          <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}} className="card-overlay">
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
            <div className="caption">
              <span className="caption-text">MINDHUB</span><br/>
              <span className="caption-text">MENTAL HEALTH TIPS</span>
            </div>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>

          </div>
          <div className='slickCourseContainer'>
          <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>

          </div>
          <div className='slickCourseContainer'>
          <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
          </div>
        </div>

         <div className='cs'>
          <div className='slickCourseContainer'>
          <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>

          </div>
          <div className='slickCourseContainer'>
          <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>

          </div>
          <div className='slickCourseContainer'>
          <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
          </div>
        </div>

        <div className='cs'>
          <div className='slickCourseContainer'>
          <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>

          </div>
          <div className='slickCourseContainer'>
          <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>

          </div>
          <div className='slickCourseContainer'>
          <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div style={{width: "200px", height: "300px"}}>
            <a href="/courses/course-details" alt='course'>
              <img src={courses} style={{height: '100%', width: '100%'}} className="img-fluid card-img-course" alt="image1" />
            </a>
          </div>
        </div>
          </div>
        </div>
        </Slider>
      </div>
    </div>

    </>
  )
}
