import React from 'react'
import { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config'


export default function Login() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        } catch(error) {
            console.log(error.message);
        }
    };

  return (
    <div className='signup-form'>
        <div className='header'>
          <div className='header-text-dark'> Log In</div>
          <div className="underline-short"></div>
        </div> 

    <div className="inputs">
        <div className="input">
            <input 
                placeholder='Email'
                onChange={(event)=>{
                setRegisterEmail(event.target.value);
                }}  
            />
        </div>

        <div className="input">
            <input
                type='password'
                placeholder='Password'
                onChange={(event)=>{
                setRegisterPassword(event.target.value);
                }}  
            />
        </div>

        <div className='forgot-password'>
          <a href="">Forgot Password? Click here!</a>
        </div>

    </div>
        <div className="btn-container">
            <btn className="btn-submit" onClick={register}> Log In </btn>
        </div>
    </div>
  )
}

