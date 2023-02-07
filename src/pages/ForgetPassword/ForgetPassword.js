import { useState } from "react";
import Form from '../../utilities/Forms'
import './ForgetPassword.css'
import key from '../../assets/key.png'


const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [validate, setValidate] = useState({});

    const validateforgotPassword = () => {
        let isValid = true;

        let validator = Form.validator({
            email: {
                value: email,
                isRequired: true,
                isEmail: true
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }

    const forgotPassword = (e) => {
        e.preventDefault();

        const validate = validateforgotPassword();

        if (validate) {
            alert('Reset password link is sent to '+email);
            setValidate({});
            setEmail('');
        }
    }
    
   return(
    <div className='forget-wrapper'>
        <div className='forget-wrapper-2'>
        <img src={key} className="forget-key" alt="" />
        <h4>Forgot Your Password?</h4>
        <form action="" className="auth-form" method="POST" onSubmit={forgotPassword} autoComplete={'off'}>
            <input type="email"
              placeholder='Type Your Email Here'
              className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               />
                <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                    {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                </div>
             <br/>
            <input type="submit" className="btn forget-btn" value="Send Email" />
        </form>
    </div>
    </div>
   )
    
}

export default ForgetPassword;