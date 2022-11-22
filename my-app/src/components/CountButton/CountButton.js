import React, { useState } from "react";
import "./CountButton.css";



const CountButton = (props) => {
    
    const [currentCount, setCurrentCount] = useState(0);

    const handleClick = () => {
        setCurrentCount(currentCount + (props.incrementBy || 1));
    };

    const divStyle = {
        color: "blue",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "2rem"
    };

    const buttonStyles = {
        fontSize: "20pt",
        borderRadius: props.borderRadius || "5px",
        background: props.buttonColor || "green",
    }
    return(
        <div style={divStyle}>
            <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy || 1}</button>
            <p className="count-display">{currentCount}</p>
        </div>
    )
};

export default CountButton;