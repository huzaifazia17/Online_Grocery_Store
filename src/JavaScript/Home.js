// Home.js will contain main page with all grocery items
import Carousel from './MainCarousel';
import React, { Component } from 'react';
import '../Styles/Home.css';
import { SliderData } from './CarouselImages';
import '../Styles/Home.css';

const Home = () => {
    return (
        <Carousel slides={SliderData} />
    )

}

export default Home;