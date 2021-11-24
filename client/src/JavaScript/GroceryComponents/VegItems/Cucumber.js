import React from 'react'
import './veggrocery.css';
import Cucumberimg from '../../../images/groceryItemImages/Vegetables/cucumber 2.jpg';

const Lettuce = () => {
    return (
        <div className="veg-container">
            <div>
                <h1>Cucumber</h1>
            </div>
            <div className="top-image ">
                <img src={Cucumberimg}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><a href="/Products"><button className="addToCart">VIEW ITEM</button></a></li>
            </ul>
        </div>
    )
}

export default Lettuce;
