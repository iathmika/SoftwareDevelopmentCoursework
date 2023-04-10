import React from "react";
import Navigator from "../../components/Navigator/navigator";
import styles from "./style.css"

const Store = () => {
  return(
    <div className={"store-container"}>
      <div className={"navigator-container"}>
        <Navigator />
      </div>
      <div>
        Store
      </div>
    </div>
  )
}

export default Store;