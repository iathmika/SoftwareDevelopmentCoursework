import React, {useEffect, useState} from "react";
import Navigator from "../../components/Navigator/navigator";
import styles from "./style.css";
import GameCardSet from "../../components/gameCardSet";
import SearchBar from "../../components/searchBar/searchBar";
import AddNewGame from "../../components/newGameDialog";
import TypeFilter from "../../components/typeFilter/typeFilter";
import Button from "@mui/material/Button";

const Store = () => {
  const spider_man =  {
    name: "Spider Man",
    rating: 9.8,
    onButtonClick: () => { console.log("hi") },
    backgroundImage: "jpg/spider_man.jpeg"
  };
  const games = new Array(20).fill(spider_man);
  const tag = "Action";

  const [searchText, setSearchText] = useState('');
  const [typeSelection, setTypeSelection] = useState('');
  const [addNewGame, setAddNewGame] = useState(false);

  const searchTextChange = (value) => {
    setSearchText(value);
  }

  const typeSelectionChange = (value) => {
    setTypeSelection(value);
  }

  return(
    <div className={"home"}>
      <div className={"navigator-container"}>
        <Navigator />
      </div>
      <div className={"collections"}>
        <div className="title-container">
          <div className="title">Game List</div>
          <div className={"data-filter-container"}>
            <SearchBar placeHolder="Enter the Name" searchTextChange={searchTextChange}/>
            <TypeFilter typeChange={typeSelectionChange}/>
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
          <GameCardSet data={games} />
        </div>
      </div>
    </div>
  )
}

export default Store;
