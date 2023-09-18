import React from 'react'
import { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config'


export default function Signup() {

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
          <div className='header-text-dark'> Sign Up</div>
          <div className="underline-short"></div>
        </div>  
    <div className="inputs">

        <div className="input">
            <input
                type='text'
                placeholder='First Name'
                onChange={(event)=>{
                setRegisterPassword(event.target.value);
                }}  
            />
        </div>

        <div className="input">
            <input
                type='text'
                placeholder='Last Name'
                onChange={(event)=>{
                setRegisterPassword(event.target.value);
                }}  
            />
        </div>

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

        <div className="input">
            <input
                type='password'
                placeholder='Confirm Password'
                onChange={(event)=>{
                setRegisterPassword(event.target.value);
                }}  
            />
        </div>

    </div>
        <div className="btn-container">
            <btn className="btn-submit" onClick={register}> Create Account </btn>
        </div>
    </div>
  )
}
