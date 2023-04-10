import React, {useState} from "react";
import RuleSender from "./ruleSender/ruleSender";

const Test = () => {
  const [text, setText] = useState('');

  const handleSentRule = (value) => {
    setText(value);
  }

  return(
    <div style={{display: "flex", flexDirection: "column", width: "80%"}}>
      <RuleSender onSend={handleSentRule}/>
    </div>
  )

}

export default Test;