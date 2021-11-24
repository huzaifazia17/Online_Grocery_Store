import React from 'react'
import '../../Sliders/bakedSlider.css';
//import Bagels from '../GroceryComponents/BakedItems/Bagels';
import Bagels from '../../GroceryComponents/BakedItems/Bagels'

import Bread from '../../GroceryComponents/BakedItems/Bread';
import Brioche from '../../GroceryComponents/BakedItems/Brioche';
import Buns from '../../GroceryComponents/BakedItems/Buns';
import Doughnuts from '../../GroceryComponents/BakedItems/Doughnuts';
import Cookies from '../../GroceryComponents/BakedItems/Cookies';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';


const bakedSlider = () => {
    return (
        <div>
            <div>
                <div className="baked-swiper-container">
                    <div className="title">
                        <h1>Baked Items</h1>
                    </div>
                    <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                        "clickable": true
                    }} className="mySwiper">
                        <SwiperSlide><Cookies /></SwiperSlide><SwiperSlide><Doughnuts /></SwiperSlide><SwiperSlide><Bagels /></SwiperSlide><SwiperSlide><Brioche /></SwiperSlide><SwiperSlide><Buns /></SwiperSlide><SwiperSlide><Bread /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default bakedSlider
