import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import LOGO from "../../assets/img/logo.jpg";
import TOP from "../../assets/img/top.jpg";
import axios from "../../axios";
import "./Login.css";
import number from "prop-types";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const login = event => {
    event.preventDefault();
    let data = {
      sign_in_user_params: {
        email: Email,
        password: Password
      }
    };
    axios
      .post("/sign_in", data)
      .then(json => {
        alert("loh");
        //ユーザ生成時に以下の情報をローカルストレージに入れる。
        console.log(json.data);
        window.localStorage.setItem("token", json.data.token);
        window.localStorage.setItem("id", json.data.id);
        if (json.status === 200) {
          this.setState({ logined: true });
        }
      })
      .catch(err => {
        console.log(err, err.data);
      });
  };

  return (
    <div>
      {localStorage.getItem("name") !== null ? (
        <Redirect to={"/matches"} />
      ) : (
        <Container style={{ textAlign: "left" }}>
          <Row>
            <Col lg={5}>
              <Form style={{ marginTop: "30%", marginRight: "28%" }}>
                <img src={LOGO} alt="MyLogo" />
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "Arial",
                    color: "gray",
                    marginTop: "40px"
                  }}
                >
                  おかえりなさい！
                </p>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label
                    style={{
                      marginTop: "30px"
                    }}
                  >
                    メールアドレス
                  </Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>パスワード</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.onChange}
                  />
                </Form.Group>

                <Button
                  variant="danger"
                  type="submit"
                  onClick={this.login}
                  style={{
                    marginTop: "20px"
                  }}
                >
                  ログイン
                </Button>
                <div className="el_signup">
                  <p>
                    会員登録がまだの方は<a href="/signup">こちら</a>
                  </p>
                </div>
              </Form>
            </Col>
            <Col lg={7}>
              <img
                style={{ maxWidth: "800px", height: "100vh", margin: "0" }}
                src={TOP}
                alt="toppic"
              />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Login;
