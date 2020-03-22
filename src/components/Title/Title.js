import React, { Component } from "react";
import { Link } from "react-router-dom";
class Title extends Component {
  render() {
    return (
      <div>
        <Link to="/login">ログインはこちら</Link>
        <Link to="/signup">新規登録はこちら</Link>
      </div>
    );
  }
}
export default Title;
