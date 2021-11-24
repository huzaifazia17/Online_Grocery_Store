import '../../Sliders/meatSlider.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import A5Wagyu from '../../GroceryComponents/MeatItems/A5Wagyu';
import ChickenWhole from '../../GroceryComponents/MeatItems/ChickenWhole';
import GroundBeef from '../../GroceryComponents/MeatItems/GroundBeef';
import Ribs from '../../GroceryComponents/MeatItems/Ribs';
import Normalbeef from '../../GroceryComponents/MeatItems/NormalBeef';
import GroundChicken from '../../GroceryComponents/MeatItems/GroundChicken';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

const meatSlider = () => {
    return (
        <div >
            <div className="meat-swiper-container">
                <div className="title">
                    <h1>Meat Items</h1>
                </div>
                <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    <SwiperSlide><A5Wagyu /></SwiperSlide><SwiperSlide><ChickenWhole /></SwiperSlide><SwiperSlide><GroundBeef /></SwiperSlide><SwiperSlide><Ribs /></SwiperSlide><SwiperSlide><Normalbeef /></SwiperSlide><SwiperSlide><GroundChicken /></SwiperSlide>
                </Swiper>
            </div>
        </div>


    )
}

export default meatSlider;