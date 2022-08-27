import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
   <div className='login'>
    <form className='login__form'>
        <h1> Login here</h1>
        <input 
            type='email' 
            placeholder='Email' 
            value={email} 
            onChange={ e => setEmail(e.target.value)}
        />
        <input 
            type='password' 
            placeholder='Password' 
            value={password} 
            onChange={ e => setPassword(e.target.value)}
        />
        <button type='submit' className='submit_btn'>
            Submit
        </button>
    </form>
   </div>
  );
}

export default Login;
