import React from 'react'
import './grocery.css';
import A5 from '../../../images/groceryItemImages/Meat/A5.jpg';
import star from '../../../images/star.png';

const A5Wagyu = () => {
    return (
        <div className="meat-container">
            <div>
                <h1>A5 Wagyu Beef</h1>
            </div>
            <div className="top-image">
                <img src={A5}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><a href="/Products"><button className="addToCart">VIEW ITEM</button></a></li>
            </ul>
        </div>
    )
}

export default A5Wagyu
