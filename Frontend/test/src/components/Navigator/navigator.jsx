import React, { useState } from 'react';
import BasicButton from '../basicButton/basicButton';
import {NavLink} from "react-router-dom";
import styles from './Navigator.css'

const Navigator = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    return (
        <div className="navigator">
          <ul className="list">
            <li>
              <NavLink to={"/Store"} className={"NavLink"}>
                <BasicButton text={"Store"} svg={"svg/store.svg"} />
              </NavLink>
            </li>
            <li>
            <NavLink to={"/"} className={"NavLink"}>
              <BasicButton text={"Home"} svg={"svg/home.svg"} />
            </NavLink>
            </li>
            <li>
              <NavLink to={"/Community"} className={"NavLink"}>
                <BasicButton text={"Community"} svg={"svg/community.svg"} />
              </NavLink>
            </li>
          </ul>
          <BasicButton
            text="Setting"
            svg="./svg/setting.svg"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          />
        </div>
    );
};

export default Navigator;
