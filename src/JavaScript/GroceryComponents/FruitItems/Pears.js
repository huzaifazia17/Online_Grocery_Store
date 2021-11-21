import React from 'react'
import './fruitgrocery.css';
import Pearimg from '../../../images/groceryItemImages/Fruits/pears.jpg';

const Pear = () => {
    return (
        <div className="fruit-container">
            <div>
                <h1>Pears</h1>
            </div>
            <div className="top-image ">
                <img src={Pearimg}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart">VIEW ITEM</button></li>
            </ul>
        </div>
    )
}

export default Pear;

