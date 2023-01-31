import React from 'react'
import './OurFounder.css'
import Fadila from '../../assets/Fadilaimage.png'
import facebook from '../../assets/fb-xd.png'
import twiter from '../../assets/twitter-xd.png'
import linkedin from '../../assets/in-xd.png'
import youtube from '../../assets/youtube-xd.png'
import instagram from '../../assets/insta-xd.png'
import Chatbot from '../../components/Chatbot/Chatbot'
import cbot from '../../assets/chatbot.png'

export default function OurFounder() {

  return (
    <>
    
      <Chatbot cbot={cbot}/>

      <div className='founders-wrapper'>
        <div className='founders-txt'>
            <h1>OUR FOUNDER</h1>
            <p>
            Fadila Ghandour, founder and director of Scorehub (Skills Center of Resources and Empowerment), is an educational counselor and special educator. <br/><br /> She started her career as a social worker then thrived to become a program manager providing educational actions of prevention, protection, and vocational integration and assessing the socialemotional and psychological aspects of the beneficiaries’ needs in the most developed techniques.<br /><br /> The experience mentioned lies within the idea that education is the foundation for protection. Therefore, she set a mission to bridge the gap between educational institutions and the authentic workforce, which led her to establish the concept of Scorehub in 2018.
            </p>
            <div className="founders-social">
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <img src={twiter} alt="founders twitter" className='f-social-icon' />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <img src={facebook} alt="founders facebook" className='f-social-icon' />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="founders linkedin" className='f-social-icon' />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src={instagram} alt="founders instagram" className='f-social-icon' />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <img src={youtube} alt="founders youtube" className='f-social-icon' />
              </a>
            </div>
        </div>
        <div className="founders-img">
            <img src={Fadila} alt="Mrs.Fadila the Founder" className="founders-pic" />
        </div>
      </div>
    </>
  )
}
