import React from 'react'
import './fruitgrocery.css';
import Waterimg from '../../../images/groceryItemImages/Fruits/Watermelon.jpg';

const Watermelon = () => {
    return (
        <div className="fruit-container">
            <div>
                <h1>Watermelon</h1>
            </div>
            <div className="top-image ">
                <img src={Waterimg}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>7</li>
                <li><a href="/Products"><button className="addToCart">VIEW ITEM</button></a></li>
            </ul>
        </div>
    )
}

export default Watermelon;

