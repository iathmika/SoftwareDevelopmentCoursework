import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/index"
import Store from "../pages/Store/index"
import Community from "../pages/Community";
import Navigator from "../components/Navigator/navigator";
import styles from "./style.css"
import TextInputSender from "../components/ruleSender/ruleSender";
import Test from "../components/infoCard";
import LoginPage from "../pages/Login_Page";


const AppRouter = () => {
  return (
    <Router>
      <div className={"router"}>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default AppRouter;