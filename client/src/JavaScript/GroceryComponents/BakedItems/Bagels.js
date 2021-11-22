import React from 'react'
import './bakedgrocery.css';
import Bagles from '../../../images/groceryItemImages/Baked Goods/Fresh Bagels.jpg';

const Bagels = () => {
    return (
        <div className="baked-container">
            <div>
                <h1>Bagels</h1>
            </div>
            <div className="top-image ">
                <img src={Bagles}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart">VIEW ITEM</button></li>
            </ul>
        </div>
    )
}

export default Bagels;
