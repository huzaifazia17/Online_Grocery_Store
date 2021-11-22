import React from 'react'
import './drinkgrocery.css';
import Fants from '../../../images/groceryItemImages/Drinks/fanta.jpg';

const Fanta = () => {
    return (
        <div className="drink-container">
            <div>
                <h1>Fanta</h1>
            </div>
            <div className="top-image ">
                <img src={Fants}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart">VIEW ITEM</button></li>
            </ul>
        </div>
    )
}

export default Fanta;
