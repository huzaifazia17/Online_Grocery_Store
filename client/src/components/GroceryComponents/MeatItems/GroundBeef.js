import React from 'react'
import './grocery.css';
import groundB from '../../../images/groceryItemImages/Meat/groundBeef.png';
import star from '../../../images/star.png';

const GroundBeef = () => {
    return (
        <div className="meat-container">
            <div>
                <h1>Ground Beef</h1>
            </div>
            <div className="top-image">
                <img src={groundB}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>

            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>15</li>
                <li><a href="/Products"><button className="addToCart">VIEW ITEM</button></a></li>
            </ul>
        </div>
    )
}

export default GroundBeef;
