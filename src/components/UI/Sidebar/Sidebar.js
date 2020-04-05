import React, { Component } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../../assets/img/logo.jpg";
import "./Sidebar.css";
class Sidebar extends Component {
  render() {
    return (
      <div className="sideContainer">
        <img
          src={LOGO}
          alt="LOGO"
          style={{
            width: "250px",
            paddingTop: "20px"
          }}
        />
        <div
          style={{
            padding: "20px",
            color: "pink"
          }}
        >
          <Link
            to={"/matches"}
            style={{
              color: "#f73f5f",
              textDecoration: "none",
              fontSize: "20px"
            }}
          >
            迷えるSHEEP
          </Link>
        </div>
        <div
          style={{
            padding: "20px"
          }}
        >
          <Link
            to={"/chat"}
            style={{
              color: "#f73f5f",
              textDecoration: "none",
              fontSize: "20px"
            }}
          >
            メッセージ
          </Link>
        </div>
        <div
          style={{
            padding: "20px"
          }}
        >
          <Link
            to={"/users"}
            style={{
              color: "#f73f5f",
              textDecoration: "none",
              fontSize: "20px"
            }}
          >
            マッチング
          </Link>
        </div>
        <div
          style={{
            padding: "20px"
          }}
        >
          <Link
            to={"/matches"}
            style={{
              color: "#f73f5f",
              textDecoration: "none",
              fontSize: "20px"
            }}
          >
            設定
          </Link>
        </div>
      </div>
    );
  }
}
export default Sidebar;
