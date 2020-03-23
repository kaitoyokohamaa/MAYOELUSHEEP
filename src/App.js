import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { Route, Switch } from "react-router-dom";
import Title from "./components/Title/Title";
import Signup from "./components/Signup/Signup";
import Matches from "./components/Matches/Matches";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/Matches" component={Matches} />
        <Route path="/" exact component={Title} />
      </Switch>
    </div>
  );
}

export default App;
