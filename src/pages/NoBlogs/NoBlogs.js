import React from 'react'
import './NoBlogs.css'
import Chatbot from '../../components/Chatbot/Chatbot'
import cbot from '../../assets/chatbot.png' 
// import ScatteredItems from '../../components/ScatterdItems/ScatterdItems'

export default function NoBlogs() {
  return (
    <div className='noBlogs-wrapper'>
      {/* <ScatteredItems className="scat-noblogs"/> */}
      <Chatbot cbot={cbot}/>
      <div className='blog-noblogs'>
        <h1>BLOG</h1> 
        <p>Few lines about our blogs Lorem ipsum dolor sit amet consectetur .</p>
      </div>
      <div className='notAvailableBlogs'>
        <h1>NO BLOGS ARE AVAILABLE</h1>
      </div>
    </div>
  )
}
