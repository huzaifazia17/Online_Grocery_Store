import React from 'react'
import './fruitgrocery.css';
import Apples from '../../../images/groceryItemImages/Fruits/Apple.jpg';

const Apple = () => {
    return (
        <div className="fruit-container">
            <div>
                <h1>Apple</h1>
            </div>
            <div className="top-image ">
                <img src={Apples}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart">VIEW ITEM</button></li>
            </ul>
        </div>
    )
}

export default Apple;
