import React from 'react';
import { Button } from './Button.js';
import '../Styles/hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <h1>THE FUTURE IS HERE</h1>
            <h2>Say goodbye to Walmart, FreshCo, Sobeys, Longos, No Frills and all other old fashioned grocery stores</h2>
            <h2>Buy all you grocery online and never worry about wasting going to the store</h2>
            <h2>Get better, higher quality and extremly quick delivery right to your doorstep! </h2>
            <h3>{"\n"} </h3>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>START SHOPPING</Button>
            </div>

        </div>
    )
}

export default Hero;