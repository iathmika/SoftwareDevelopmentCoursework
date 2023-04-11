import React, {useEffect, useState} from "react";
import RuleSender from "../ruleSender/ruleSender";
import RulesBoard from "../rulesBoard/rulesBoard";
import style from "./style.css";

const myOfficialRules = "1. No cheating, hacking, or using exploits in any form.\n2. Respect other players and refrain from any kind of harassment, hate speech, or discriminatory behavior.\n3. No intentionally causing lag or disruption to the game."
const unofficialRules_1 = "1. No cheating, hacking, or using exploits in any form.\n2. Respect other players and refrain from any kind of harassment, hate speech, or discriminatory behavior.\n3. No intentionally causing lag or disruption to the game."
const unofficialRules_2 = "1. No cheating, hacking, or using exploits in any form.\n2. Respect other players and refrain from any kind of harassment, hate speech, or discriminatory behavior.\n3. No intentionally causing lag or disruption to the game."
const unofficialRules_3 = "1. No cheating, hacking, or using exploits in any form.\n2. Respect other players and refrain from any kind of harassment, hate speech, or discriminatory behavior.\n3. No intentionally causing lag or disruption to the game."
const myUserRules = [unofficialRules_1, unofficialRules_2, unofficialRules_3];
const myGameName = "Among Us";
const myGameRating = "4.5";

const GameInfo = ({name, rating }) => {
  return (
    <div className="game-info">
      <div className="game-name">{name}</div>
      <div className="game-rating">{rating}</div>
    </div>
  )
}

const Rules = () => {
  const [newRule, setNewRule] = useState("");
  const [officialRules, setOfficialRules] = useState("");
  const [userRules, setUserRules] = useState([]);
  const [gameName, setGameName] = useState("");
  const [gameRating, setGameRating] = useState("");

  useEffect(() => {
    // Actually, we should fetch data from backend.
    setOfficialRules(myOfficialRules);
    setUserRules(myUserRules);
    setGameName(myGameName);
    setGameRating(myGameRating);
  })
  const handleNewRule = (newValue) => {
    setNewRule(newValue);
    // Actually, we should send data to backend.
    console.log("send data to backend");
  }

  return(
    <div className="container-1">
      <GameInfo name={gameName} rating={gameRating}/>
      <div className="container-2">
        <div style={{color: "white", fontSize: "32px"}}>
          House rules
        </div>
        <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
          <RuleSender onSend={handleNewRule}/>
          <RulesBoard newData={newRule} officialRules={officialRules} userRules={userRules}/>
        </div>
      </div>
    </div>
  )
}

export default Rules;