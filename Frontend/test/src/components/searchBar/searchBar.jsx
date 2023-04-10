import React, {useState} from "react";
import axios from "axios";
import styles from "./styles.css"

/**
 * searchTextChange is a function in parent component:
 * const searchTextChange = (newvalue) = > {
 *   setQuery(newvalue);
 * }
 * **/
const SearchBar = ({placeHolder, searchTextChange}) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await fetchData(userInput);
    }
  };

  const fetchData = async (query) => {
    try {
      const response = await axios.get(`https://your-api-url.com/search?query=${query}`);
      const data = response.data;
      searchTextChange(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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