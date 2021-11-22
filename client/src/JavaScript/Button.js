import React from "react";
import '../Styles/Button.css';


const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'byn--large'
]

export const Buttons = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,

}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <a href='/Cart'>
            <button className={`btn1 ${checkButtonStyle} ${checkButtonSize} onClick={onClick} type={type}`}>
                {children}
            </button>
        </a>

    )
}