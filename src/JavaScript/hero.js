import React from 'react';
import { Button } from './Button.js';
import '../Styles/hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <h1>GOODBYE GROCERY TRIPS</h1>
            <h1>HELLO SUPER QUICK GROCERY DOOR DELIEVRIES</h1>
            <h3>{"\n"} </h3>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>START SHOPPING</Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>START POOPING</Button>
            </div>

        </div>
    )
}

export default Hero;