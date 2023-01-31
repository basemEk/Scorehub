import React from 'react'
import cbot from '../../assets/chatbot.png'

 const Chatbot = ({cbot}) => {
  return (
    <>
      <div className='chatbot'>
        <img src={cbot} alt="" />
      </div>
    </>
  )
}

 export default Chatbot;
