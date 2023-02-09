import React from 'react'

 const Chatbot = ({cbot}) => {
  return (
    <>
      <div className='chatbot'>
        <img src={cbot} alt="chatbot" className='cbot-img' />
      </div>
    </>
  )
}

 export default Chatbot;
