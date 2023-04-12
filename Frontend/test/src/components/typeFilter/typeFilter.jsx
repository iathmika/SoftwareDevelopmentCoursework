import React, {useEffect, useState} from "react";
import styles from "./style.css"

const TypeFilter = ({typeChange}) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    typeChange(event.target.value);
  }

  useEffect(() => {
    // TO DO The options should be fetched from the backend
    setOptions(["Option 1", "Option 2", "Option 3", "Option 4"]);
  }, [])

  return(
    <div className="type-filter-container">
      <select value={selectedOption} className="type-filter" onChange={handleChange}>
        <option value="" className="options">Select an option</option>
        {options.map((item, index) => (
          <option value={item} key={index} className="options">{item}</option>
        ))}
      </select>
    </div>
  )
}

export default TypeFilter;