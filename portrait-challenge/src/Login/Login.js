import React, { useState} from 'react';
import './Login.scss';
import check from '../Icons/check.png';

function Login() {
    let email = React.createRef();
    let password = React.createRef();
    const [isRightEmail, setRightEmail] = useState(false);
    const [isRevealPassword, setRevealPassword] = useState(false);

    function togglePassword() {
      setRevealPassword(!isRevealPassword);
    }

    function validateEmail(){
      let value = email.current.value;
      setRightEmail(value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value));
    }

    function log(){
        debugger;
    }

    return (
        <div className="login-form align-middle">
            <div className="row">
                <div className="col-12">
                    <div className="login-input-group">
                        <input placeholder="google@gmail.com" type="email" className="login-input login-email" ref={email} onChange={validateEmail}/>
                        <span className="login-input-icon">
                            {
                                isRightEmail &&
                                <img className="rounded" src={check} alt="check" /> 
                            }
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="login-input-group">
                        <input className="login-input login-email" ref={password} type={ isRevealPassword ? 'text' : 'password' } placeholder="Your password"/>
                        <span className="login-input-icon">
                            <button className="login-show-password-button" onClick={togglePassword}>
                                { isRevealPassword ? 'hide' : 'show' }
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 d-flex justify-content-center">
                    <div className="login-sing-in-form">
                        <button className="login-sing-in-button" onClick={log}>Sign in</button>
                    </div>
                </div>  
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="login-new-account-form">
                        <a className="login-new-account-button">New Account</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Login;