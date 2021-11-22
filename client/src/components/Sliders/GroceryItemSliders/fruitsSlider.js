import React from 'react'
import '../../Sliders/fruitSlider.css';
import Apple from '../../../JavaScript/GroceryComponents/FruitItems/Apple';
import Pear from '../../../JavaScript/GroceryComponents/FruitItems/Pears'
import BlackBerry from '../../../JavaScript/GroceryComponents/FruitItems/BlackBerry';
import BlueBerry from '../../../JavaScript/GroceryComponents/FruitItems/BlueBerry';
import Watermelon from '../../../JavaScript/GroceryComponents/FruitItems/Watermelon';
import Melon from '../../../JavaScript/GroceryComponents/FruitItems/Melon';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

const fruitsSlider = () => {
    return (
        <div >
            <div>
                <div className="fruit-swiper-container">
                    <div className="title">
                        <h1>Fruit Items</h1>
                    </div>
                    <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                        "clickable": true
                    }} className="mySwiper">
                        <SwiperSlide><Apple /></SwiperSlide><SwiperSlide><Pear /></SwiperSlide><SwiperSlide><BlackBerry /></SwiperSlide><SwiperSlide><BlueBerry /></SwiperSlide><SwiperSlide><Watermelon /></SwiperSlide><SwiperSlide><Melon /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default fruitsSlider;