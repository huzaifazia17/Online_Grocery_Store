import React from 'react'
import './drinkgrocery.css';
import Choco from '../../../images/groceryItemImages/Drinks/chocolate milk.jpg';

const ChocolateMilk = () => {
    return (
        <div className="drink-container">
            <div>
                <h1>Chocolate Milk</h1>
            </div>
            <div className="top-image ">
                <img src={Choco}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>3</li>
                <li><a href="/Products"><button className="addToCart">VIEW ITEM</button></a></li>
            </ul>
        </div>
    )
}

export default ChocolateMilk;
