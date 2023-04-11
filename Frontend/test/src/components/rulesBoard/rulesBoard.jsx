import React, {useEffect} from "react";
import styles from "./styles.css"

// rules is a list containing all rules should be displayed.
const RulesComponent = ({title, rules}) => {

  // rules is a string
  return (
    <div className="rules-container">
      <div className="title">{title}</div>
      <div className="rule-container">
        {rules}
      </div>
    </div>
  );
};

const RulesBoard = ({newData, officialRules, userRules}) => {
  const [myUserRules, setMyUserRules] = React.useState([]);

  useEffect(() => {
    if (newData.length > 0) {
      setMyUserRules([newData, ...myUserRules]);
    }
  }, [newData])

  useEffect(() => {
    setMyUserRules(userRules);
  }, [userRules]);

  return(
    <div className="rules-board-container">
      <RulesComponent title="Official Rules" rules={officialRules} />
      <div className="rule-component-container">
        <ul className="user-rules-list">
          {myUserRules.map((rules, index) => (
            <li key={index} className="rule-component-list">
              <RulesComponent title={`Alternative Rules ${myUserRules.length-index}`} rules={rules}/>
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
}

export default RulesBoard;