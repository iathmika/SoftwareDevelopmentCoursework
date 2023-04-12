import React, { useState } from "react";
import BasicButton from "../basicButton/basicButton";
import styles from "./style.css"
import Rating from '@mui/material/Rating';

const ReviewSender = ({onSend}) => {
  const [inputText, setInputText] = useState('');
  const [rating, setRating] = useState(2);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    onSend(inputText);
    setInputText('');
  };

  return (
    <div className="text-input-sender">
      <Rating
        sx={{
          "& .MuiRating-iconEmpty": {
            color: "white"
          }
        }}
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
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

export default ReviewSender;
