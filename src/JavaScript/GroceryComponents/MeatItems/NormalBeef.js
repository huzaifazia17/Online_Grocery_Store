import React from 'react'
import './grocery.css';
import nBeef from '../../../images/groceryItemImages/Meat/Normal Beef.jpg';
import star from '../../../images/star.png';

const NormalBeef = () => {
    return (
        <div>
            <div className="meat-container">
                <div>
                    <h1>Regular Beef</h1>
                </div>
                <div className="top-image override-gc">
                    <img src={nBeef}></img>
                </div>
                <p>This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan.This is our delicious A5 wagyu beef imported directly from Japan. This is our delicious A5 wagyu beef imported directly from Japan. <a href="#">Read More</a></p>

                <ul className="bottom-row">
                    <li className="price"><span>&#36;</span>74.99</li>
                    <li><button className="addToCart">ADD TO CART</button></li>
                </ul>
            </div>
        </div>
    )
}

export default NormalBeef;
