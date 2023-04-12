import React, {useEffect, useState} from "react";
import GameCardSet from "../../components/gameCardSet/gameCardSet";
import styles from "./style.css"
import SearchBar from "../../components/searchBar/searchBar";
import TypeFilter from "../../components/typeFilter/typeFilter";
import Navigator from "../../components/navigator/navigator";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rules from "../../components/rule/rules";

const spider_man =  {
  _id: 1,
  name: "Spider Man",
  rating: 9.8,
  image: "jpg/spider_man.jpeg"
};
const myGames = new Array(20).fill(spider_man);

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [typeSelection, setTypeSelection] = useState('');
  const [games, setGames] = useState(myGames);

  const searchTextChange = (value) => {
    setSearchText(value);
  }
  const typeSelectionChange = (value) => {
    setTypeSelection(value);
  }
/*
  useEffect(() => {
    // The options should be fetched from the backend based on search text and type selection.
  
    console.log("fetch game data from backend");
    setGames(myGames);
  }, [searchText, typeSelection])
*/

  useEffect(() => {
    console.log("fetching games...");
  fetch('http://localhost:8000/user/game', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      // include the session ID in the Authorization header
    },
    
  }).then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))},[])

  return(
    <div className={"home"}>
      <div className={"navigator-container"}>
        <Navigator />
      </div>
      <div className={"collections"}>
            <div className="title-container">
              <div className="title">Collection</div>
              <div className={"data-filter-container"}>
                <SearchBar placeHolder="Enter the Name" searchTextChange={searchTextChange}/>
                <TypeFilter typeChange={typeSelectionChange}/>
              </div>
            </div>
            <div className={"game-card-set-container"}>
              <GameCardSet games={games} />
            </div>
          </div>
    </div>
  )
}

export default Home;