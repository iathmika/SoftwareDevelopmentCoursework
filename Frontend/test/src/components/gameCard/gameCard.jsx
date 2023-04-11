import React, {useEffect, useState} from "react";
import BasicButton from "../basicButton/basicButton";
import GameDetails from "../gameDetails";
import Button from "@mui/material/Button";
import styles from "./GameCard.css"
import {NavLink} from "react-router-dom";
import AddGameDialog from "../newGameDialog";

const GameCard = ({gameName, rating, backgroundImage, onButtonClick}) => {
    const [openGame, setOpenGame] = useState(false);

  return (
    <div className="game-card">
    <div className="game-card-content" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="game-info">
            <h4 className="game-name">{gameName}</h4>
            <p className="game-rating">Rating: {rating}</p>
        </div>
        <div className="game-delete">
          <Button variant="contained" onClick={() => setOpenGame(true)}>Open</Button>
          <BasicButton onClick={onButtonClick} text="Delete" svg="svg/delete.svg"/>
        </div>
        {openGame &&
            (<GameDetails
              gameName={gameName}
              handleClose = {() => {
                setOpenGame(false);
              }}
              openGame={openGame}>
            </GameDetails>)

          }
    </div>
    </div>
  );

};



export default GameCard;
