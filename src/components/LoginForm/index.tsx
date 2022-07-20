import React, { FC } from 'react';

const LoginForm: FC = () => {
  return (
    <>
      <h1>LoginForm</h1>
      <form>
        <div>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="emailInput" />
        </div>

        <div>
          <label htmlFor="password"></label>
          <input type="password" name="password" id="passwordInput" />
        </div>

        <button>REGISTER</button>
      </form>
    </>
  );
};

export default LoginForm;
