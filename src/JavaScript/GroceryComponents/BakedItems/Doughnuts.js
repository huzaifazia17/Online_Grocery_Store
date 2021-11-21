import React from 'react'
import './bakedgrocery.css';
import Dough from '../../../images/groceryItemImages/Baked Goods/doughnuts.jpg';

const Doughnuts = () => {
    return (
        <div className="baked-container">
            <div>
                <h1>Doughnuts</h1>
            </div>
            <div className="top-image ">
                <img src={Dough}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart">VIEW ITEM</button></li>
            </ul>
        </div>
    )
}

export default Doughnuts;
