import React from "react";
import "./App.css";
import Login from "./screens/Login/Login";
import { Route, Switch } from "react-router-dom";
import Title from "./components/Title/Title";
import Signup from "./screens/Signup/Signup";
import Matches from "./components/Matches/Matches";
import Profile from "./screens/Profile/Profile";
import Users from "./screens/Users/Users";
import Register from "./screens/Register/Register";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/Matches" component={Matches} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Title} />
      </Switch>
    </div>
  );
}

export default App;
