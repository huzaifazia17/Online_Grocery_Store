import React from 'react';
import { Buttons } from '../components/Button/Button.js';
import '../Styles/hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <h1>GOODBYE GROCERY TRIPS</h1>
            <h1>HELLO SUPER QUICK GROCERY DOOR DELIEVRIES</h1>
            <h3>{"\n"} </h3>
            <div className="hero-btns">
                <Buttons className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>START SHOPPING</Buttons>
                <Buttons className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>START POOPING</Buttons>
            </div>

        </div>
    )
}

export default Hero;