import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    const [taxPrice, setTaxPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [taxAdded, setTax] = useState(0);

    const purchased = () => {
        alert("Thank you for shopping with H2Z2 Grocries!!");

        navigate("/");
        window.location.reload();
    }
    useEffect(() => {
        let items = 0;
        let price = 0;
        let tax = 1.13;
        let priceWithTax;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
            priceWithTax = price * tax;
        });

        priceWithTax > 0 ? setTax(1) : setTax(0);
        setTotalItems(items);
        setTotalPrice(price);
        setTaxPrice(priceWithTax);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems, setTaxPrice]);

    return (
        <div className={styles.cart}>
            <div className={styles.cart__items}>
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className={styles.cart__summary}>
                <h4 className={styles.summary__title}>Cart Summary</h4>
                <div className={styles.summary__price}>
                    <span>TOTAL: ({totalItems} items)</span>
                    <span>$ {totalPrice}</span>
                </div>
                <div className={styles.summary__price}>
                    <span>TOTAL WITH TAX: (1.13%)</span>
                    <span>$ {taxAdded ? (Math.round(taxPrice * 100) / 100).toFixed(2) : 0}</span>
                </div>
                <button className={styles.summary__checkoutBtn} onClick={purchased}>
                    Proceed To Checkout
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Cart);
