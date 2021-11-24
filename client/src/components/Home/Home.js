import React, { Component } from 'react';
import './Home.css';
import Hero from './hero'
import HowTo from './HowTo';
//import MeatSlider from '../Sliders/GroceryItemSliders/meatSlider';
import MeatSlider from '../Sliders/GroceryItemSliders/meatSlider'
import VegSlider from '../Sliders/GroceryItemSliders/vegSlider';
import FruitSlider from '../Sliders/GroceryItemSliders/fruitsSlider';
import BakedSlider from '../Sliders/GroceryItemSliders/bakedSlider';
import DrinkSlider from '../Sliders/GroceryItemSliders/drinksSlider';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HowTo> </HowTo>
            <MeatSlider />
            <VegSlider />
            <FruitSlider />
            <BakedSlider />
            <DrinkSlider />
        </div>
    )

}

export default Home;