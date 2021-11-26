import './NavBar.css'
import React, { Component, useState, useEffect } from 'react';
import { NavItems } from "./NavItems";
import { Buttons } from '../components/Button/Button';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({ cart }) => {
    //set default authState as empty
    const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        status: false,
    });


    //function to logout and remove local storage token
    //sets authentication state to no user logged in
    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", id: 0, status: false });
    };

    //function to refresh page
    const refreshPage = () => {
        window.location.reload(false);
    }

    //function to refresh page and logout
    const logoutRefresh = () => {
        logout();
        refreshPage();
    }

    const [open, setOpen] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);

    return (
        <nav className='NavBarItems'>
            <h1 className="navbar-logo">
                <a href="/" className="navbar-logo-link">
                    <i className="fab fa-react"></i> H2Z2 Groceries
                </a>

            </h1>
            <div className="menu-icon" onClick={() => setOpen(!open)}>
                <i className={open ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={open ? 'nav-menu active' : 'nav-menu'}>
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

            <div className="loggedInContainer">
                <Link to="/">
                    <button onClick={logoutRefresh} className="logoutBtn" > Logout </button>
                </Link>
            </div>

            <div className="upperbutton">
                <Link to="/Cart">
                    <Buttons >CART ({cartCount})</Buttons>
                </Link>
            </div>

        </nav>

    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(NavBar);