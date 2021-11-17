import '../../Styles/vegSlider.css';
import Lettuce from '../GroceryComponents/VegItems/Lettuce';
import Cucumber from '../GroceryComponents/VegItems/Cucumber';
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
                        <SwiperSlide><Lettuce /></SwiperSlide><SwiperSlide><Cucumber /></SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default vegSlider;