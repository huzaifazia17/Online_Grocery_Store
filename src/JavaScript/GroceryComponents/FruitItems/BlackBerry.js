import React from 'react'
import './fruitgrocery.css';
import Blackimg from '../../../images/groceryItemImages/Fruits/Black Berry.jpg';

const BlackBerry = () => {
    return (
        <div className="fruit-container">
            <div>
                <h1>BlackBerry</h1>
            </div>
            <div className="top-image ">
                <img src={Blackimg}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart">VIEW ITEM</button></li>
            </ul>
        </div>
    )
}

export default BlackBerry;

