import React from "react";
import styles from "./styles.css"

const rules = ["No cheating, hacking, or using exploits in any form.",
  "Respect other players and refrain from any kind of harassment, hate speech, or discriminatory behavior.",
  "No intentionally causing lag or disruption to the game."]

// rules is a list containing all rules should be displayed.
const RulesComponent = ({title, rules}) => {

  return (
    <div className="rules-container">
      <div className="title">Official Rules</div>
      <div className="list-container">
        <ul className="list">
          {rules.map((rule, index) => (
            <li key={index} className="rule">{`${index + 1}. ` + rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const RulesBoard = () => {
  return(
    <div>
      <RulesComponent title="Official Rules" rules={rules} />
    </div>
  )
}