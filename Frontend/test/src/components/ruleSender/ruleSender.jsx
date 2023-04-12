import React, { useState } from 'react';
import BasicButton from "../basicButton/basicButton";
import styles from "./styles.css"

const RuleSender = ({onSend}) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    onSend(inputText);
    setInputText('');
  };

  return (
    <div className="text-input-sender">
      <textarea
        type="text"
        value={inputText}
        onChange={handleInputChange}
        className="text-input"
      ></textarea>
      <div className={"send-button"}>
        <BasicButton handleButtonClick={handleButtonClick} svg="/svg/send.svg"/>
      </div>
    </div>
  );
}

export default RuleSender;
