import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user-slice';
import './login.css';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e : React.FormEvent) =>{
    e.preventDefault()

    dispatch(login({
        email, 
        password
    }))
  }

  return (
   <div className='login'>
    <form className='login__form' onSubmit={ e => handleSubmit(e)}>
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
