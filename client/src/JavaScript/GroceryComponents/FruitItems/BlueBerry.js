import React from 'react'
import './fruitgrocery.css';
import Blueimg from '../../../images/groceryItemImages/Fruits/Blue Berry.jpg';

const BlueBerry = () => {
    return (
        <div className="fruit-container">
            <div>
                <h1>BlueBerry</h1>
            </div>
            <div className="top-image ">
                <img src={Blueimg}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart"><a href="/Products">VIEW ITEM</a></button></li>
            </ul>
        </div>
    )
}

export default BlueBerry;

