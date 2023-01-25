import React from 'react'
import './Home.css'
import slider1 from '../../assets/landing-banner.png';
import slider2 from '../../assets/landing-banner-2.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ThreeDCarousel from '../../components/ThreeDCarousel/ThreeDCarousel';
import play from '../../assets/Play.svg'
import speechLg from '../../assets/speech-bubble-large.png';
import speechMd from '../../assets/speech-bubble-medium.png';
import speechSm from '../../assets/speech-bubble-small.png';
import person from '../../assets/girl-blackhair.png';
import person2 from '../../assets/girl-brownhair.png';
import person3 from '../../assets/girl-in-glasses.png';
import person4 from '../../assets/afroman-icon.png';
import person5 from '../../assets/smallhair-man-icon.png';
import slideOneImage from '../../assets/image1-slider.png';
import slideTwoImage from '../../assets/image2-slider.png';
import slideThreeImage from '../../assets/image3-slider.png';
import bannerVr from '../../assets/vr-kid.png';


export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
    <div>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner homeBanner">
            <div className="carousel-item active first-slide-container">
                <div className='first-slide-home'>
                    <div className='h1-h4-home'>
                        <h1>Let’s learn about new knowledge & abilities.</h1><br/>
                        <h4>Let’s discover new friends & have learning experience with our beautiful teachers!</h4><br/>
                        <div class="container">
                          <div className="video-backg">
                            <p className="lead">WATCH VIDEO</p>
                            <img src={play} className="play-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                          </div>
                          <div class="col"><button type="button" class="btn btn-light btn-lg">BOOK NOW</button></div>
                          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                          aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content modal-content-video">
                              <div className="modal-body">
                                <video src="assets/images/dubai/newone/videoplayback.mp4" type="video/mp4" controls>
                                </video>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                    </div>
                </div> 
                
              <img src={slider1} className="d-block w-100 banner-img-home" alt="banner 1" />
            </div>

            <div className="carousel-item homeBanner">
               <div className='first-slide-home'>
                    <div className='h1-h4-home'>
                        <h1>Let’s learn about new knowledge & abilities.</h1><br/>
                        <h4>Let’s discover new friends & have learning experience with our beautiful teachers!</h4><br/>
                        <div class="container">
                          <div className="video-backg">
                            <p className="lead">WATCH VIDEO</p>
                            <img src={play} className="play-btn" data-bs-toggle="modal" data-bs-target="#exampleModal-2" />
                          </div>
                          <div class="col"><button type="button" class="btn btn-light btn-lg">BOOK NOW</button></div>
                          <div className="modal fade" id="exampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel-2"
                          aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content modal-content-video">
                              <div className="modal-body">
                                <video src="assets/images/dubai/newone/videoplayback.mp4" type="video/mp4" controls>
                                </video>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                    </div>
                </div> 
              <img src={slider2} className="d-block w-100" alt="banner 2" />
            </div>
          </div>
        </div>   
        
        <ThreeDCarousel />

        <section>
          <div className='studentSayingAbout'>
            <div className='what-our-students col-lg-4 pt-lg-4 pb-lg-5 mb-5 ms-md-5'>
              <h1 className='mt-lg-5 ms-lg-5'>
                What our students are saying about us
              </h1>
              <p className='ms-lg-5'>
                A few lines about our students and what are saying maybe a thank you for our students…
              </p>
           </div>

           <div className="speeches">
           
              <div className="speech-3">
                <img src={person} className="personImgHome" width="50px" height="50px" alt="" />
                <img src={speechMd} alt="" />
              </div>

              <div className="speech-4">
                <img src={person2} className="personImgHome" width="50px" height="50px" alt="" />
                <img src={speechMd} alt="" />
              </div>

              <div className="speech-5">
                <img src={person3} className="personImgHome" width="30px" height="30px" alt="" />
                <img src={speechSm} alt="" />
              </div>

              <div className="speech-6">
                <img src={person4} className="personImgHome" width="70px" height="70px" alt="" />
                <img src={speechLg} alt="" />
              </div>

              <div className="speech-7">
                <img src={person5} className="personImgHome" width="50px" height="50px" alt="" />
                <img src={speechMd} alt="" />
              </div>

              <div className="speech-8">
                <img src={person} className="personImgHome" width="70px" height="70px" alt="" />
                <img src={speechLg} alt="" />
              </div>

              <div className="speech-9">
                <img src={person2} className="personImgHome" width="30px" height="30px" alt="" />
                <img src={speechSm} alt="" />
              </div>

              <div className="speech-10">
                <img src={person3} className="personImgHome" width="30px" height="30px" alt="" />
                <img src={speechSm} alt="" />
              </div>
            </div>





            {/* SPEECHES ON RESPONSIVE VIEW */}
            <div className="speeches-mobile">   
              <div class="column-speech-mob">
               <div className="speech-11">
                <img src={person} className="personImgHome-2 speech-mob-sm" width="30px" height="30px" alt="" />
                <img src={speechSm} alt="" />
              </div>
              <div className="speech-12">
                <img src={person2} className="personImgHome-2" width="50px" height="50px" alt="" />
                <img src={speechMd} alt="" />
              </div>
              <div className="speech-13">
                <img src={person3} className="personImgHome-2" width="70px" height="70px" alt="" />
                <img src={speechLg} alt="" />
              </div>
            </div>

            <div class="column-speech-mob">
              <div className="speech-14">
                <img src={person4} className="personImgHome-2 speech-mob-sm" width="30px" height="30px" alt="" />
                <img src={speechSm} alt="" />
              </div>
              <div className="speech-15">
                <img src={person5} className="personImgHome-2" width="50px" height="50px" alt="" />
                <img src={speechMd} alt="" />
              </div>
              <div className="speech-16">
                <img src={person} className="personImgHome-2" width="70px" height="70px" alt="" />
                <img src={speechLg} alt="" />
              </div>
              </div>
            </div>

          </div>
        </section>


        <section>
        <div className="container-vr-about">
            <div className="learn-more-about">
                <h1 className='mt-5'>Learn more about Eduverse</h1>
                <p>Learning using the latest immersive technologies Metaverse AR/VR, anywhere, anytime.</p>
            </div>
            <div className="learn-more-banner">
                <img src={bannerVr} id="vr-kid" alt="" />
            </div>
        </div>
      </section>


    <section>
       <div className='cards-carouselTwo-home'>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-5 text-center text-md-start mb-5 true-master">
                <h1>
                  True masters in their fields, ready to teach you
                </h1>
                <p>A few lines about our teachers and what are saying maybe a thank you for our teachers…</p>
              </div>
            </div>
          </div>

      <Slider {...settings}>
          <div className="cardTwo-home">
            <img src={slideOneImage} className="homeSlideImg" alt="" />
            {/* <div className='card-content'> */}
              <p>Full Name</p>
              <p>Title</p>
            {/* </div> */}
          </div>

          <div className="cardTwo-home">
            <img src={slideTwoImage} className="homeSlideImg" alt=""/>
          </div>

          <div className="cardTwo-home">
            <img src={slideThreeImage} className="homeSlideImg" alt="" />
          </div>

         <div className="cardTwo-home">
            <img src={slideOneImage} className="homeSlideImg" alt="" />
         </div>

        <div className="cardTwo-home">
          <img src={slideTwoImage} className="homeSlideImg" alt="" />
        </div>
      </Slider>
    </div>
    </section>

    </div>
    </>
  )
}
