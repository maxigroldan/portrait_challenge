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
        </div>
    );
}

export default Login;