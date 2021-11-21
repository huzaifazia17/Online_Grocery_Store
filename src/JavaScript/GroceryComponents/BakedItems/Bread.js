import React from 'react'
import './bakedgrocery.css';
import Breads from '../../../images/groceryItemImages/Baked Goods/fresh bread.jpg';

const Bread = () => {
    return (
        <div className="baked-container">
            <div>
                <h1>Fresh Bread</h1>
            </div>
            <div className="top-image ">
                <img src={Breads}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart">VIEW ITEM</button></li>
            </ul>
        </div>
    )
}

export default Bread;
