import React from 'react'
import './drinkgrocery.css';
import Oju from '../../../images/groceryItemImages/Drinks/orange juice.jpg';

const OJ = () => {
    return (
        <div className="drink-container">
            <div>
                <h1>Orange Juice</h1>
            </div>
            <div className="top-image ">
                <img src={Oju}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>2</li>
                <li><a href="/Products"><button className="addToCart">VIEW ITEM</button></a></li>
            </ul>
        </div>
    )
}

export default OJ;
