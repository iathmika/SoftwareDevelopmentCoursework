import React from 'react';
import styles from "./basicButton.css"

const BasicButton = ({ handleButtonClick, text, svg, style}) => {

    return (
         <button className="Button" style={style} onClick={handleButtonClick}>
            {svg ? <img src={svg} className={"svg-button"}/> : null}
            {text ? <span>{text}</span> : null}
        </button>
    );
};

export default BasicButton;
