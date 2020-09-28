import React from 'react';
import './Login.scss';

function Login() {
    return (
        <div className="login-form align-middle">
            <div className="row">
                <div className="col-12">
                    <div className="login-input-group">
                        <input placeholder="google@gmail.com" type="email" className="login-input login-email" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="login-input-group">
                        <input className="login-input" type="password" placeholder="Your password"/>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 d-flex justify-content-center">
                    <div className="login-sing-in-form">
                        <button className="login-sing-in-button">Sign in</button>
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