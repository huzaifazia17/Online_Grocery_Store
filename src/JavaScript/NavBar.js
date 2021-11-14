import '../Styles/NavBar.css'
import React, { Component, useState } from 'react';
import { NavItems } from "./NavItems";
import { Button } from './Button';

class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='NavBarItems'>
                <h1 className="navbar-logo"><a href="/" className="navbar-logo-link"><i className="fab fa-react"></i> H2Z2 Groceries</a></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.className} href={item.url}>
                                    {item.title}
                                </a>
                            </li>

                        )
                    })}
                </ul>
                <Button>CART</Button>
            </nav>

        )
    }
}

export default NavBar