import React from 'react'
import './veggrocery.css';
import Broc from '../../../images/groceryItemImages/Vegetables/Broccoli.jpg';

const Broccoli = () => {
    return (
        <div className="veg-container">
            <div>
                <h1>Broccoli</h1>
            </div>
            <div className="top-image ">
                <img src={Broc}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>2</li>
                <li><a href="/Products"><button className="addToCart">VIEW ITEM</button></a></li>
            </ul>
        </div>
    )
}

export default Broccoli;
