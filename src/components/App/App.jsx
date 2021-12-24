import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";

import Profile from "../Profile/Profile";
import Training from "../Training/Training";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Profile} />
        <Route path="/training" exact component={Training} />
      </Router>
    </div>
  );
}

export default App;
