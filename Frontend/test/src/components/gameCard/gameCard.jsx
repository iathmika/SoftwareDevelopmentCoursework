import React from 'react';
import styles from "./GameCard.css"
import BasicButton from "../basicButton/basicButton";

const GameCard = ({gameName, rating, backgroundImage, onButtonClick}) => {
  return (
      <div className="game-card">
        <div className="game-card-content" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className="game-info">
                <h4 className="game-name">{gameName}</h4>
                <p className="game-rating">Rating: {rating}</p>
            </div>
            <div className="game-delete">
              <BasicButton onClick={onButtonClick} text="Delete" svg="svg/delete.svg"/>
            </div>
        </div>
      </div>
  );
};

export default GameCard;
