import React from 'react';
import { Buttons } from '../Button/Button.js';
import './hero.css';
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero-container ">
            <div className="text_btn animate__animated animate__swing">
                <h1>GOODBYE GROCERY TRIPS</h1>
                <h1>HELLO SUPER QUICK GROCERY DOOR DELIEVRIES</h1>
                <h3>{"\n"} </h3>
                <div className="hero-btns">
                    <Link to="/Products">
                        <Buttons className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>START SHOPPING</Buttons>
                    </Link>
                    <Link to="/ContactUs">
                        <Buttons className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>CONTACT US</Buttons>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;