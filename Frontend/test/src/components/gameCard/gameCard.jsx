import React, {useEffect, useState} from "react";
import BasicButton from "../basicButton/basicButton";
import GameDetails from "../gameDetails";
import Button from "@mui/material/Button";
import styles from "./GameCard.css"
import {NavLink} from "react-router-dom";
import AddGameDialog from "../newGameDialog";

const GameCard = ({ game }) => {
    const [openGame, setOpenGame] = useState(false);

  return (
    <div className="game-card">
    <div className="game-card-content" style={{ backgroundImage: `url(${game.image})`}}>
        <div className="game-info">
            <h4 className="game-name">{game.name}</h4>
            <p className="game-rating">Rating: {game.rating}</p>
        </div>
        <div className="game-delete">
          <Button variant="contained" onClick={() => setOpenGame(true)}>Open</Button>
          <BasicButton onClick={() => "add"} text="Add" svg="svg/add.svg"/>
        </div>
        {openGame &&
            (<GameDetails
              game={game}
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
