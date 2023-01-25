import React from 'react'
import AddToCardBtn from '../../components/AddToCardBtn/AddToCardBtn'
import Slider from "react-slick";
import './Courses.css'


export default function Courses() {

  return (
    <>
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

      <div id="carouselExampleIndicators" data-interval="false" className="container carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="false" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="courses-container">
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <a href="/course-details" alt='course'><button>buy now</button></a>
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          <button>buy now</button>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
      </div>
          </div>
          <div className="carousel-item">
          <div className="courses-container">
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
            <button>buy now</button>
          </div>        </div>
     </div>
          </div>
          <div className="carousel-item">
          <div className="courses-container">
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          <button>buy now</button>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          <button>buy now</button>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          <button>buy now</button>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          <button>buy now</button>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          <button>buy now</button>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          <button>buy now</button>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          <button>buy now</button>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          <button>buy now</button>
        </div>
          </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      {/* <div className='container'>
        <Slider {...settings}>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          </div>
        </div>
        <div className="card-course">
          <div className="top-right">
            <AddToCardBtn />
          </div>
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300" className="img-fluid card-img-course" alt="image1" />
          </div>
        </div>
        </Slider>
      </div> */}
    </div>
    </>
  )
}
