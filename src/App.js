import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { Route, Switch } from "react-router-dom";
import Title from "./components/Title/Title";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
