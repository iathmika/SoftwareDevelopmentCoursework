import React from "react";
import styles from "./style.css"
import GameCard from "../gameCard/gameCard";

const GameCardSet = ({data}) => {
  return (
    <div className="game-card-set">
      {data.map((item, index) => (
        <GameCard gameName={item.name} backgroundImage={item.backgroundImage} rating={item.rating} key={index} />
      ))}
    </div>
  );
}

export default GameCardSet;