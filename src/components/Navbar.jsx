import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

export default function Navbar() {

        const navigate = useNavigate();

        const navigateLogin = () => {
                navigate('/login');
                };

        const navigateSignup = () => {
                navigate('/signup');
                };
    return (
        <>
        <div className='container'>
            <nav>
                <div className="logo">
                    <img src="src\images\logo.jpg"/>
                </div>

                <div className="nav-elements">
                    <ul>
                        <li> <NavLink to ="/"> Home </NavLink></li>
                        <li> <NavLink to ="/showtimes"> Shows</NavLink></li>
                        <li> <NavLink to ="/buytickets"> Purchase </NavLink></li>
                        <li> <NavLink to ="/theaters"> Information </NavLink></li>
                    </ul>
                </div>

                <div className="nav-btn-container">
                    <button className='btn-login' onClick={navigateLogin}> Login</button>
                    <button className='btn-login' onClick={navigateSignup}> Sign Up</button>               
                </div>
            </nav>
        </div>
        </>
    )
}