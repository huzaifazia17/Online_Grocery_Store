import React, { Component } from 'react';
import '../Styles/Home.css';
import Hero from './hero';
import HowTo from './HowTo';
import MeatSlider from './meatSlider';
import VegSlider from './vegSlider';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HowTo> </HowTo>
            <MeatSlider />
            <VegSlider />
        </div>
    )

}

export default Home;