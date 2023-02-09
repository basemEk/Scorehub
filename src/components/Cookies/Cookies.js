import React, { useState } from 'react';
import Cookies from 'js-cookie';
import './Cookies.css';


const CookieExample = () => {
  const [cookieValue, setCookieValue] = useState('');
  const [showCookieExample, setShowCookieExample] = useState(true);

  const handleSetCookie = () => {
    Cookies.set('exampleCookie', 'Hello, Cookies!', { expires: 7 });
    setCookieValue('Hello, Cookies!');
  };

//   const handleGetCookie = () => {
//     const value = Cookies.get('exampleCookie');
//     setCookieValue(value);
//   };

  const handleRemoveCookie = () => {
    Cookies.remove('exampleCookie');
    setCookieValue('');
    setShowCookieExample(false);
  };


  return (
    showCookieExample && (
        <div className="cookie-example">
          <h3 className="cookie-example__header">Cookies Settings</h3>
          <p className="cookie-example__value">We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this, as outlined in our Cookies Policy. {cookieValue}</p>
          <div className="cookie-example__buttons">
            <button className="cookie-example__button" onClick={handleSetCookie}>Accept</button>
            {/* <button className="cookie-example__button" onClick={handleGetCookie}>Get Cookie</button> */}
            <button className="cookie-example__button" onClick={handleRemoveCookie}>Reject</button>
          </div>
        </div>
    )
  );
};

export default CookieExample;
