import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import LOGO from "../../assets/img/logo.jpg";
import TOP from "../../assets/img/top.jpg";
import axios from "../../axios";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      old: "",
      gender: "",
      password: "",
      password_confirm: "",
      signup: false
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup(event) {
    event.preventDefault();
    let data = {
      user_params: {
        name: this.state.name,
        age: this.state.old,
        gender: this.state.gender,
        mail: this.state.email,
        password: this.state.password,
        password_confirm: this.state.password_confirm
      }
    };
    axios
      .post("/sign_up", data)
      .then(json => {
        alert("loh");
        //ユーザ生成時に以下の情報をローカルストレージに入れる。
        console.log(json.data);
        window.localStorage.setItem("token", json.data.token);
        window.localStorage.setItem("id", json.data.id);
        if (json.status === 200) {
          this.setState({ signup: true });
        }
      })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err, err.data);
      });
    alert("koko");
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        {this.state.signup ? (
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
                      type="name"
                      placeholder="name"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>メールアドレス</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>年齢</Form.Label>
                    <Form.Control
                      as="select"
                      name="old"
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      placeholder="Password"
                      onChange={this.onChange}
                    />
                    <Form.Label>パスワード</Form.Label>
                    <Form.Control
                      name="password_confirm"
                      type="password"
                      placeholder="Password"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <Button variant="danger" type="submit" onClick={this.signup}>
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
  }
}
export default Signup;
