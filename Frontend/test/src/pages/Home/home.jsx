import React, {useEffect, useState} from "react";
import GameCardSet from "../../components/gameCardSet/gameCardSet";
import styles from "./style.css"
import SearchBar from "../../components/searchBar/searchBar";
import TypeFilter from "../../components/typeFilter/typeFilter";
import Navigator from "../../components/navigator/navigator";

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
  const [games, setGames] = useState([]);

  useEffect(() => {
  fetch('http://localhost:8000/user/game', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    //TO DO add searchText and typeSelection as parametars
    
  }).then(response => response.json())
  .then(
    data => setGames(data)
    //TO DO fix add to collection button
  )
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
                <SearchBar placeHolder="Enter the Name" searchTextChange={(value) => {setSearchText(value)}}/>
                <TypeFilter typeChange={(value) => { setTypeSelection(value) }}/>
              </div>
            </div>
            {games.length > 0 &&
            <div className={"game-card-set-container"}>
              <GameCardSet games={games} />
            </div>
            }
            
          </div>
    </div>
  )
}

export default Home;