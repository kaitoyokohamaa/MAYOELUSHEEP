import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../UI/Sidebar/Sidebar";
import Matches from "../Matches/Matches";
import Users from "../../screens/Users/Users";
class Title extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex"
        }}
      >
        <Users />
        {/* <Matches /> */}
      </div>
    );
  }
}
export default Title;
