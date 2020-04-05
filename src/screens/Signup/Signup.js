import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import LOGO from "../../assets/img/logo.jpg";
import TOP from "../../assets/img/top.jpg";
import axios from "../../axios";

const Signup = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Old, setOld] = useState("");
  const [Gender, setGender] = useState("");
  const [Password, setPassword] = useState("");
  const [Password_confirm, setPassword_confirm] = useState("");
  const [Auth, setAuth] = useState(false);

  const signup = event => {
    event.preventDefault();
    let data = {
      user_params: {
        name: Name,
        age: Email,
        gender: Old,
        mail: Gender,
        password: Password,
        password_confirm: Password_confirm
      }
    };
    axios
      .post("/sign_up", data)
      .then(json => {
        alert("loh");
        //ユーザ生成時に以下の情報をローカルストレージに入れる。
        console.log(json.data);
        window.localStorage.setItem("token", json.data.token);
        window.localStorage.setItem("name", json.data.name);
        window.localStorage.setItem("id", json.data.id);
        if (json.status === 200) {
          setAuth(true);
        }
      })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err, err.data);
      });
    alert("koko");
    console.log("RENDRING INGREDIENTS", Name);
  };

  useEffect(() => {
    console.log("RENDRING INGREDIENTS", Name);
  }, [Name]);

  return (
    <div>
      {Auth ? (
        <Redirect to={"/profile"} />
      ) : (
        <Container style={{ textAlign: "left" }}>
          <Row>
            <Col lg={5}>
              <Form style={{ marginTop: "25%", marginRight: "28%" }}>
                <img src={LOGO} alt="MyLogo" />
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>お名前</Form.Label>
                  <Form.Control
                    name="name"
                    value={Name}
                    type="name"
                    placeholder="name"
                    onChange={event => {
                      setName(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>メールアドレス</Form.Label>
                  <Form.Control
                    name="email"
                    value={Email}
                    type="email"
                    placeholder="Enter email"
                    onChange={event => {
                      setEmail(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>年齢</Form.Label>
                  <Form.Control
                    as="select"
                    name="old"
                    value={Old}
                    onChange={event => {
                      setOld(event.target.value);
                    }}
                  >
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                  </Form.Control>
                  <Form.Label>性別</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={Gender}
                    onChange={event => {
                      setGender(event.target.value);
                    }}
                  >
                    <option>選んでください！</option>
                    <option>男</option>
                    <option>女</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>パスワード</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    value={Password}
                    placeholder="Password"
                    onChange={event => {
                      setPassword(event.target.value);
                    }}
                  />
                  <Form.Label>パスワード</Form.Label>
                  <Form.Control
                    name="password_confirm"
                    type="password"
                    value={Password_confirm}
                    placeholder="Password"
                    onChange={event => {
                      setPassword_confirm(event.target.value);
                    }}
                  />
                </Form.Group>
                <Button variant="danger" type="submit" onClick={signup}>
                  始める
                </Button>
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
export default Signup;
