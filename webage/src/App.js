import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import About from "./components/About"
import Home from "./components/Home"
import Music from "./components/Music"

function App() {
  return (
    <Router>
      <Nav /> // render the Nav component
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/music" component={Music} />
    </Router>
  );
}

export default App;
