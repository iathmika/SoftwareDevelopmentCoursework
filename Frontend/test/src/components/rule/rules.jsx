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

const Rules = ({ game }) => {
  const [newRule, setNewRule] = useState("");
  const [officialRules, setOfficialRules] = useState(myOfficialRules);
  const [userRules, setUserRules] = useState(myUserRules);

  //TO DO add review and rating to the backend

  const handleNewRule = (newValue) => {
    setNewRule(newValue);
  }

  return(
    <div className="container-1">
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