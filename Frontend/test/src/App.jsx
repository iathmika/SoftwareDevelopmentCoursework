import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRouter from "./router";
import styles from "./App.css"

function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  )
}
export default App;