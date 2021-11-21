import React from 'react'
import './grocery.css';
import chicken from '../../../images/groceryItemImages/Meat/chicken whole.png';
import star from '../../../images/star.png';

const ChickenWhole = () => {
    return (
        <div className="meat-container">
            <div>
                <h1>Whole Chicken</h1>
            </div>
            <div className="top-image">
                <img src={chicken}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart">VIEW ITEM</button></li>
            </ul>
        </div>
    )
}

export default ChickenWhole;
