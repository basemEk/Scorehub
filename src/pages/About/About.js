import React from 'react'
import kidsStudying from '../../assets/kids-studying.png'
import kidsPlaying from '../../assets/kids-playing.png'
import girlStudying from '../../assets/girl-studying.png'
import './About.css'
import bannerVr from '../../assets/vr-kid.png';
import Chatbot from '../../components/Chatbot/Chatbot'
import cbot from '../../assets/chatbot.png'


export default function About() {
  return (
    <>
      <Chatbot cbot={cbot}/>
      
    <section className='container-about p-lg-5'>
      <div className='about-page p-5'>
            <div className='d-lg-flex about-first-row'>
             <div className='about-us col-lg-5'>
                <h1>About Us</h1>
                <p>
                    We aim to build an innovative network that attends to the child’s multiple needs, offering holistic and digitalized integrative learning approaches through futuristic and state-of-the-art platforms and mobile applications to deliver sustainable results. <br/><br/>
                    Score-hub’s unique curriculum focuses on psycho-social support, culture, art, and life skills. Scorehub intends to reengineer educational approaches to improve efficiency and pave way for holistic, psychosocial, academic development.
                </p>
             </div>
            <div className="px-lg-5 kidsStudying"><img src={kidsStudying} width="270" alt="" /></div>
                <div className='vision'>
                    <h1>Vision</h1>
                    <p>
                    Differentiate and personalize curriculum delivery to encourage and empower our learners by allowing them to develop their full potential and to properly be engaged as global citizens.
                </p>
            </div>
            </div>
             <div className='about-second-row d-lg-flex about-first-row'>
                 <div className='mission d-lg-flex d-block mt-5'>
                     <div><img src={kidsPlaying} className="kidsPlaying" width="270" alt=""/></div>
                    <div className='mission ms-lg-5'>
                        <h1>MISSION</h1>
                        <p className='col-lg-10'>
                            Scorehub is committed to respecting the dignity, unique talents, and individuality of every learner served. The Hub provides excellent, innovative instruction in a welcoming and peaceful environment in order to inspire, motivate and build self confidence.
                        </p>
                    </div>
                </div>

            <div className='values d-sm-block'>
                <div>
                    <img src={girlStudying} className="girlStudying" width="270" alt="" />
                </div>
                   <div className='d-sm-block'>
                        <h1>VALUES</h1>
                       <p>
                         Create a holistic transformation in the educational industry to develop a stimulating and smart learning environment fostering sustainable growth.
                       </p>
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
    </>
  )
}
