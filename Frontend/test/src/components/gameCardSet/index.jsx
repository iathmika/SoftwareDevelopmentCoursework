import React from "react";
import styles from "./style.css"
import GameCard from "../gameCard/gameCard";

const GameCardSet = ({ games }) => {
  return (
    <div className="game-card-set">
      {games.map((game, index) => (
        <GameCard game={game} />
      ))}
    </div>
  );
}

export default GameCardSet;