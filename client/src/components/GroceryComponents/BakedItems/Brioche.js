import React from 'react'
import './bakedgrocery.css';
import Bri from '../../../images/groceryItemImages/Baked Goods/Brioche Bread.jpg';

const Brioche = () => {
    return (
        <div className="baked-container">
            <div>
                <h1>Brioche Bread</h1>
            </div>
            <div className="top-image ">
                <img src={Bri}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><a href="/Products"><button className="addToCart">VIEW ITEM</button></a></li>
            </ul>
        </div>
    )
}

export default Brioche;
