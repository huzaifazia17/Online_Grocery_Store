import React from 'react'
import './grocery.css';
import ribs from '../../../images/groceryItemImages/Meat/Short Ribs.png';
import star from '../../../images/star.png';

const Ribs = () => {
    return (
        <div className="meat-container">
            <div>
                <h1>Short Ribs</h1>
            </div>
            <div className="top-image ">
                <img src={ribs}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>

            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>74.99</li>
                <li><button className="addToCart">VIEW ITEM</button></li>
            </ul>
        </div>
    )
}

export default Ribs;
