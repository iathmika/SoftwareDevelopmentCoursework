import React, {useEffect, useState} from "react";
import Navigator from "../../components/navigator/navigator";
import styles from "./style.css";
import GameCardSet from "../../components/gameCardSet/gameCardSet";
import SearchBar from "../../components/searchBar/searchBar";
import AddNewGame from "../../components/newGameDialog/newGameDialog";
import TypeFilter from "../../components/typeFilter/typeFilter";
import Button from "@mui/material/Button";

const Store = () => {
  const spider_man =  {
    name: "Spider Man",
    rating: 9.8,
    onButtonClick: () => { console.log("hi") },
    image: "jpg/spider_man.jpeg"
  };
  const allGames = new Array(20).fill(spider_man);
  const tag = "Action";

  const [searchText, setSearchText] = useState('');
  const [typeSelection, setTypeSelection] = useState('');
  const [addNewGame, setAddNewGame] = useState(false);
  const [games, setGames] = useState([]);


  useEffect(() => {
    fetch('http://localhost:8000/game/all', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      //TO DO add searchText and typeSelection as parametars
      
    }).then(response => response.json())
    .then(data => setGames(data))
    .catch(error => console.error(error))},[])

  //TO DO only admin can add new games

  return(
    <div className={"home"}>
      <div className={"navigator-container"}>
        <Navigator />
      </div>
      <div className={"collections"}>
        <div className="title-container">
          <div className="title">Game List</div>
          <div className={"data-filter-container"}>
            <SearchBar placeHolder="Enter the Name" searchTextChange={(value) => {setSearchText(value)}}/>
            <TypeFilter typeChange={(value) => { setTypeSelection(value) }}/>
          </div>
          <div className={"new-game-publish"}>
            <Button variant="contained" onClick={() => setAddNewGame(true)}>Add New Game</Button>
          </div>
          {addNewGame &&
            (<AddNewGame
              handleClose = {() => {
                setAddNewGame(false);
              }}
              addNewGame={addNewGame}
              tag={tag}>
            </AddNewGame>)

          }
        </div>
        <div className={"game-card-set-container"}>
          <GameCardSet games={games} />
        </div>
      </div>
    </div>
  )
}

export default Store;
