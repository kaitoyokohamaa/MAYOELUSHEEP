import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../UI/Sidebar/Sidebar";
import Matches from "../Matches/Matches";
class Title extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex"
        }}
      >
        {/* <Link to="/login">ログインはこちら</Link>
        <Link to="/signup">新規登録はこちら</Link> */}
        <Sidebar />
        {/* <Matches /> */}
      </div>
    );
  }
}
export default Title;
