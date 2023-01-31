import React from 'react'
import './Contact.css'
import Chatbot from '../../components/Chatbot/Chatbot'
import cbot from '../../assets/chatbot.png'

export default function Contact() {
  return (
    <>
    <Chatbot cbot={cbot}/>
    <div className='contact-wrapper d-lg-flex justify-content-start align-items-center h-100'>
        <div className='contact-text'>
            <h1>CONTACT US</h1>
            <p>Few lines about contact us…</p>
        </div>

        <div className='contact-form'>
            <form>
               <label htmlFor="name">Name:</label><br/>
               <input type="text" id="name" name="name" className='field' /><br /><br />
               <label htmlFor="email">Email:</label><br/>
               <input type="email" id="email" name="email" className='field' /><br /><br />
               <label htmlFor="text">Subject:</label><br/>
               <input type="text" id="text" name="text" className='field' /><br /><br />
               <label htmlFor="phone">Phone Number:</label><br/>
               <input type="number" id="phone" name="phone" className='field' /><br /><br />
               <label htmlFor="message">Message:</label><br/>
               <textarea id="message" name="message" defaultValue={""} placeholder="Type Here…" className='field' /><br /><br />
               <button type="submit" className="btn btn-light contact-btn d-block m-auto px-5">SEND</button>
            </form>
        </div>
    </div>
    </>
  )
}
