import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LOGO from "../../../assets/img/logo.jpg";
class Sidebar extends Component {
  render() {
    return (
      <Container>
        <img src={LOGO} alt="LOGO" />
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
            to={"/matches"}
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
      </Container>
    );
  }
}
export default Sidebar;
