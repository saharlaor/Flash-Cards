import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={App} />
      </Router>
    </div>
  );
}

export default App;
