import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/index"
import Store from "../pages/Store/index"
import Community from "../pages/Community";
import styles from "./style.css"
import LoginPage from "../pages/Login_Page";
import Rules from "../components/Rule/rule";
import Review from "../components/Review/Review";



const AppRouter = () => {
  return (
    <Router>
      <div className={"router"}>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="home" element={<Home/>}></Route>
            <Route path="home/spiderMan" element={<Rules />}></Route>
          <Route path="store" element={<Store />}></Route>
          <Route path="community" element={<Community />}></Route>
          <Route path="rule" element={<Rules />}></Route>
          <Route path="test" element={<Review />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default AppRouter;