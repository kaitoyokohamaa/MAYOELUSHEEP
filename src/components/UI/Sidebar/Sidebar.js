import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { pink } from "color-name";
import LOGO from "../../../assets/img/logo.jpg";
class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col
            lg={3}
            style={{
              paddingTop: "25px",
              paddingBottom: "40%",
              backgroundColor: "rgb(253, 250, 250)",
              height: "auto"
            }}
          >
            <img
              src={LOGO}
              alt="LOGO"
              style={{
                width: "100%",
                marginRight: "10px"
              }}
            />
            <div
              style={{
                padding: "20px",
                color: "pink"
              }}
            >
              <Link
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
                style={{
                  color: "#f73f5f",
                  textDecoration: "none",
                  fontSize: "20px"
                }}
              >
                設定
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Sidebar;
