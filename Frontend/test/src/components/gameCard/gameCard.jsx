import React from 'react';
import styles from "./GameCard.css"
import BasicButton from "../basicButton/basicButton";
import {NavLink} from "react-router-dom";

const GameCard = ({gameName, rating, backgroundImage, onButtonClick}) => {

  return (
    <NavLink to={"/home/spiderMan"} className={"gameCard-NavLink"}>
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
    </NavLink>
  );
};

export default GameCard;
