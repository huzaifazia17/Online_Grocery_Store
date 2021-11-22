import React from 'react'
import './veggrocery.css';
import Lettuceimg from '../../../images/groceryItemImages/Vegetables/Lettuce.jpg';

const Lettuce = () => {
    return (
        <div className="veg-container">
            <div>
                <h1>Lettuce</h1>
            </div>
            <div className="top-image ">
                <img src={Lettuceimg}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart">VIEW ITEM</button></li>
            </ul>
        </div>
    )
}

export default Lettuce;
