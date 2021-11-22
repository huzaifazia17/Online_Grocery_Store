import '../../Sliders/vegSlider.css';
import Lettuce from '../../../JavaScript/GroceryComponents/VegItems/Lettuce';
import Cucumber from '../../../JavaScript/GroceryComponents/VegItems/Cucumber';
import Broccoli from '../../../JavaScript/GroceryComponents/VegItems/Broccoli';
import Avacado from '../../../JavaScript/GroceryComponents/VegItems/Avacado';
import Bean from '../../../JavaScript/GroceryComponents/VegItems/Bean';
import Asparagus from '../../../JavaScript/GroceryComponents/VegItems/Asparagus';
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

const vegSlider = () => {
    return (
        <div>
            <div>
                <div className="veg-swiper-container">
                    <div className="title">
                        <h1>Vegetable Items</h1>
                    </div>
                    <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                        "clickable": true
                    }} className="mySwiper">
                        <SwiperSlide><Asparagus /></SwiperSlide><SwiperSlide><Avacado /></SwiperSlide><SwiperSlide><Bean /></SwiperSlide><SwiperSlide><Broccoli /></SwiperSlide><SwiperSlide><Cucumber /></SwiperSlide><SwiperSlide><Lettuce /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default vegSlider;