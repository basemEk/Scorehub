import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './ShowPassword.css';


function ShowPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-container">
      <input className='pass-log' type={showPassword ? "text" : "password"} />

      <i className="icon-eye" onClick={() => setShowPassword(!showPassword)}>
        <FontAwesomeIcon icon={showPassword ? faEye  : faEyeSlash} />
      </i>
    </div>
  );
}

export default ShowPassword;
