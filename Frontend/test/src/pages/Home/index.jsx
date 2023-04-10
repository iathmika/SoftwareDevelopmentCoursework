import React, {useEffect, useState} from "react";
import GameCardSet from "../../components/gameCardSet";
import styles from "./style.css"
import SearchBar from "../../components/searchBar/searchBar";
import TypeFilter from "../../components/typeFilter/typeFilter";
import Navigator from "../../components/Navigator/navigator";

const Home = () => {
  const spider_man =  {
      name: "Spider Man",
      rating: 9.8,
      onButtonClick: () => { console.log("hi") },
      backgroundImage: "jpg/spider_man.jpeg"
    };
  const games = new Array(20).fill(spider_man);

  const [searchText, setSearchText] = useState('');
  const [typeSelection, setTypeSelection] = useState('');

  const searchTextChange = (value) => {
    setSearchText(value);
  }

  const typeSelectionChange = (value) => {
    setTypeSelection(value);
  }

  return(
    <div className={"home"}>
      <div className={"navigator"}>
        <Navigator />
      </div>
      <div className="title-container">
        <div className="title">Collection</div>
        <div className={"data-filter-container"}>
          <SearchBar placeHolder="Enter the Name" searchTextChange={searchTextChange}/>
          <TypeFilter typeChange={typeSelectionChange}/>
        </div>
      </div>
      <div className={"game-card-set-container"}>
        <GameCardSet data={games} />
      </div>
    </div>
  )
}

export default Home;