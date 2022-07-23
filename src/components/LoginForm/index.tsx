import React, { FC } from 'react';

const LoginForm: FC = () => {

    return <>
        
        <div>
            <h1>Login</h1>

            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="emailInput" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="passwordInput" />
                </div>

                <button>
                    REGISTER
                </button>
            </form>
        </div>
    </>
    
};

export default LoginForm;
