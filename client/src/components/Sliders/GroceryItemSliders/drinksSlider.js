import React from 'react'
import '../../Sliders/drinksSlider.css';

import ChocolateMilk from '../../../JavaScript/GroceryComponents/DrinkItems/ChocolateMilk';
import Coke from '../../../JavaScript/GroceryComponents/DrinkItems/Coke';
import Fanta from '../../../JavaScript/GroceryComponents/DrinkItems/Fanta';
import Tea from '../../../JavaScript/GroceryComponents/DrinkItems/Tea';
import OJ from '../../../JavaScript/GroceryComponents/DrinkItems/OJ';
import Pepsi from '../../../JavaScript/GroceryComponents/DrinkItems/Pepsi'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


const drinksSlider = () => {
    return (
        <div>
            <div >
                <div className="drink-swiper-container">
                    <div className="title">
                        <h1>Drink Items</h1>
                    </div>
                    <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                        "clickable": true
                    }} className="mySwiper">
                        <SwiperSlide><ChocolateMilk /></SwiperSlide><SwiperSlide><OJ /></SwiperSlide><SwiperSlide><Tea /></SwiperSlide><SwiperSlide><Pepsi /></SwiperSlide><SwiperSlide><Coke /></SwiperSlide><SwiperSlide><Fanta /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default drinksSlider
