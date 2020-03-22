import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { Route, Switch } from "react-router-dom";
import Title from "./components/Title/Title";
import Signup from "./components/Signup/Signup";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" exact component={Title} />
      </Switch>
    </div>
  );
}

export default App;
