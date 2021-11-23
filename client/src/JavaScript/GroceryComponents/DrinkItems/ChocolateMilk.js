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
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart"><a href="/Products">VIEW ITEM</a></button></li>
            </ul>
        </div>
    )
}

export default ChocolateMilk;
