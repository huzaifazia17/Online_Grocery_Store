import React, { Component } from 'react';
import '../Styles/Home.css';
import Hero from './hero';
import HowTo from './HowTo';
import MeatSlider from './GroceryItemSliders/meatSlider';
import VegSlider from './GroceryItemSliders/vegSlider';
import FruitSlider from './GroceryItemSliders/fruitsSlider';
import BakedSlider from './GroceryItemSliders/bakedSlider';
import DrinkSlider from './GroceryItemSliders/drinksSlider';

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