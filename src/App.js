import React from "react";
import "./App.css";
import Login from "./screens/Login/Login";
import { Route, Switch } from "react-router-dom";

import Signup from "./screens/Signup/Signup";
import Matches from "./components/Matches/Matches";
import Profile from "./screens/Profile/Profile";
import Users from "./screens/Users/Users";
import Register from "./screens/Register/Register";
import Chat from "./screens/Chat/Chat";
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
        <Route path="/register" component={Register} />
        <Route path="/chat" component={Chat} />
        <Route path="/" exact component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
