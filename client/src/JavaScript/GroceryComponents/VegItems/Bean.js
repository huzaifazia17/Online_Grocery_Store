import React from 'react'
import './veggrocery.css';
import Beans from '../../../images/groceryItemImages/Vegetables/Beans.jpg';

const Bean = () => {
    return (
        <div className="veg-container">
            <div>
                <h1>Bean</h1>
            </div>
            <div className="top-image ">
                <img src={Beans}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart"><a href="/Products">VIEW ITEM</a></button></li>
            </ul>
        </div>
    )
}

export default Bean;
