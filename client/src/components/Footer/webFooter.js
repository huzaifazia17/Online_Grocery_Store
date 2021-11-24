import './footer.css';
import React, { Component, useState } from 'react';
import { footerItems } from './footerItems.js';

class webFooter extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
        <div className='footer-container'>
            <p></p>
            <p></p>
            <p></p>

            <p className = "paragraph"><i class="fab fa-twitter"></i>&nbsp;&nbsp;<i class="fab fa-facebook"></i>&nbsp;&nbsp;<i class="fab fa-instagram"></i>&nbsp;&nbsp;<i class="fab fa-linkedin"><br/></i></p>

            <p></p>
            <p></p>

            <ul className = "footer-menu">
                {footerItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.className} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>

            <p></p>
            <p></p>

            <h1 className = "footerh1"><i className="fab fa-react"></i> H2Z2 Groceries</h1>

            <p></p>

            <p className = "rights">© 2021  H2Z2GROCERIES - ALL RIGHTS RESERVED</p>
        </div>
        )
    }
}

export default webFooter