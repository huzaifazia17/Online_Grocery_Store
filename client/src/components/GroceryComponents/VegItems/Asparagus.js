import React from 'react'
import './veggrocery.css';
import Asp from './../../../images/groceryItemImages/Vegetables/Asparagus.jpg';

const Asparagus = () => {
    return (
        <div className="veg-container">
            <div>
                <h1>Asparagus</h1>
            </div>
            <div className="top-image ">
                <img src={Asp}></img>
            </div>
            <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>
            <ul className="bottom-row">
                <li className="price"><span>&#36;</span>3</li>
                <li><a href="/Products"><button className="addToCart">VIEW ITEM</button></a></li>
            </ul>
        </div>
    )
}

export default Asparagus;
