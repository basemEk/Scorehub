import React, { useState } from 'react'
import './CourseDetails.css'
import { MdArrowBackIosNew }  from 'react-icons/md'
import { Button, ButtonGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Chatbot from '../../components/Chatbot/Chatbot'
import cbot from '../../assets/chatbot.png' 


export default function CourseDetails() {

    //store courses on local storage
    const [cart, setCart] = useState([]);

    function handleClick(item) {
        // check if the item already in cart
        const foundIndex = cart.findIndex((el) => el.id === item.id);
        let newCart = [...cart];
        if (foundIndex !== -1) {
          // update quantity if already in cart
          newCart[foundIndex].quantity++;
        } else {
          // add new item to cart
          newCart = [...cart, {...item, quantity: 1}];
        }
        // update the cart state
        setCart(newCart);
        //save the cart to localstorage
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
      

  return (
    <>
      <Chatbot cbot={cbot}/>
      
    <section className='bg-color-course-details'>
      <div className='container course-details-wrapper'>
        <div className='back-to-courses'>
            <a href="/courses" className="no-underline">
              <div className='left-flasher'><MdArrowBackIosNew size={24} /></div> 
              <div><h3>Courses</h3></div>
            </a>
        </div>
        <div className="toggle-course">
          <ButtonGroup>
           <Button color="primary">
                DESCRIPTION
           </Button>
            <Button className='btn btn-light'>
              <Link to="/courses/course-time-line" className='link-to-timeline'>
                TIMELINE
              </Link>
            </Button> 
          </ButtonGroup>
        </div>
        <div className='row d-lg-flex flex-column-md g-5'>
            <div className='col-lg-4 col-12 course-details-image'>
                <img src="https://picsum.photos/seed/picsum/400/460" className='pic' alt="course details" />
            </div>
            <div className='col-lg-6 col-12 mb-5 '>
                <h2>Mental Health Tips</h2>
                <p>This series of vidoes is all about mental health and how to take care of it. Mental health is as important as physical health, that’s why taking care of it is crucial for our wellbeing. We will be providing you with some communication tips, some techniques and some knowledge to help you optimize your mental health and hopefully be happier!</p>
                <br />
 
                <ul>
                    <li><p>Author : Ghenwa Hayek</p></li>
                    <li><p>Price : Free</p></li>
                    <li><p>Chapters : 3</p></li>
                    <li><p>Enrolled : 0 Students</p></li>
                    <li><p>Category : MindHub</p></li>
                    <li><p>Reviews : No Reviews Yet</p></li>
                </ul>

                <div className='cta-course-details d-flex mt-4'>
                    <div><button type="button" class="btn btn-primary">GET IT NOW</button></div>
                    <button type="button" class="btn btn-light" onClick={() => handleClick({id: 1, name: "item1"})}>ADD TO WISHLIST</button>

                    {/* <p>Cart: {JSON.stringify(cart)}</p> */}
                </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}
