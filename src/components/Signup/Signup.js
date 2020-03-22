import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import LOGO from "../../assets/img/logo.jpg";
import TOP from "../../assets/img/top.jpg";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      old: "",
      gender: "",
      password: "",
      redirectToReferrer: false
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup(event) {
    alert("loh");
    if (
      this.state.username &&
      this.state.email &&
      this.state.old &&
      this.state.gender &&
      this.state.password
    ) {
      const urlsign = "https://mayoeru-sheep.herokuapp.com//api/v1/sign_up";
      event.preventDefault();
      alert("loh");
      let data = {
        sign_in_user_params: {
          email: this.state.controls.email.value,
          password: this.state.controls.password.value,
          password_confirmation: this.state.controls.passwordre.value
        }
      };
      fetch(urlsign, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(json => {
          //ユーザ生成時に以下の情報をローカルストレージに入れる。
          console.log(json);
          window.localStorage.setItem("token", json.token);
          window.localStorage.setItem("id", json.id);
          window.localStorage.setItem("token", json.token);
        })
        .then(responseData => {
          console.log(responseData);
        })
        .catch(err => {
          console.log(err, err.data);
        });
      if (localStorage.token) {
        this.setState({ redirectToReferrer: true });
      }
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log([e.target.name], e.target.value);
  }

  render() {
    return (
      <Container style={{ textAlign: "left" }}>
        <Row>
          <Col lg={4}>
            <Form style={{ marginTop: "10%", marginRight: "28%" }}>
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
                <Form.Control as="select" name="old" onChange={this.onChange}>
                  <option>18</option>
                  <option>19</option>ß<option>20</option>
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
                  name="password"
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
          <Col lg={8}>
            <img
              style={{ maxWidth: "100%", height: "95vh", margin: "0" }}
              src={TOP}
              alt="toppic"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
