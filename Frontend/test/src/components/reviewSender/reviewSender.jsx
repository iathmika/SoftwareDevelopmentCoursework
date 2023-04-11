import React, { useState } from "react";
import BasicButton from "../basicButton/basicButton";
import styles from "./style.css"
import Rating from '@mui/material/Rating';

// onSend is a function that will send the Review to database. It will be triggered when the send button is clicked
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
        // placeholder="Type your text here..."
      ></textarea>
      <div className={"send-button"}>
        <BasicButton handleButtonClick={handleButtonClick} svg="/svg/send.svg"/>
      </div>
    </div>
  );
}

export default ReviewSender;
