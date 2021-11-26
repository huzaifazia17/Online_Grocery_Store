import React from 'react'
import './drinkgrocery.css';
import Cokes from '../../../images/groceryItemImages/Drinks/coke.jpg';

const Coke = () => {
    return (
        <div className="drink-container">
            <div>
                <h1>Coke</h1>
            </div>
            <div className="top-image ">
                <img src={Cokes}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>1</li>
                <li><a href="/Products"><button className="addToCart">VIEW ITEM</button></a></li>
            </ul>
        </div>
    )
}

export default Coke;
