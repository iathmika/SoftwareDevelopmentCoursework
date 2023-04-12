import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from "./styles.css"

const SearchBar = ({placeHolder, searchTextChange}) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      searchTextChange(userInput);
    }
  };

  useEffect(() => {
    if (userInput === '') {
      searchTextChange('');
    }
  }, [userInput])

  return (
    <input
      type="text"
      value={userInput}
      placeholder={placeHolder}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="user-input"
    />
  )
}

export default SearchBar;