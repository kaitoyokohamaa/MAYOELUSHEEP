import React, { useState } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";
import LOGO from "../../assets/img/logo.jpg";
import "./Register.css";
import axios from "../../axios";
const Register = () => {
  const [Profile, setProfile] = useState("");
  const [Campany, setCampany] = useState("");
  const [University, setUniversity] = useState("");

  const register = event => {
    event.preventDefault();

    let data = {
      user_params: {
        intro: Profile,
        job: Campany,
        college: University
      }
    };

    axios
      .POST("/me/requests", data)
      .then(json => {
        alert("loh");
        //ユーザ生成時に以下の情報をローカルストレージに入れる。
        console.log(json.data);
        window.localStorage.setItem("token", json.data.token);
        window.localStorage.setItem("name", json.data.name);
        window.localStorage.setItem("id", json.data.id);
      })
      .then(responseData => {
        alert("jojo");
        console.log(responseData);
      })
      .catch(err => {
        console.log(err, err.data);
      });
    alert("koko");
  };

  return (
    <div
      style={{
        textAlign: "left",
        paddingLeft: "20px"
      }}
    >
      <div
        style={{
          display: "flex"
        }}
      >
        <div className="progressbarstyle">
          <div>
            <img
              src={LOGO}
              alt="logo"
              style={{
                width: "250px",
                paddingTop: "20px"
              }}
            />
          </div>
          <ProgressBar animated now={100} />
        </div>
        <Form style={{ width: "20%", margin: "0 auto", marginTop: "10%" }}>
          <Form.Group controlId="formGroupProfile">
            <Form.Label>プロフィール</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={Profile}
              placeholder="Profile"
              onChange={event => {
                setProfile(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupCompany">
            <Form.Label>会社について</Form.Label>
            <Form.Control
              type="campany"
              value={Campany}
              placeholder="Campany"
              onChange={event => {
                setCampany(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupUniversity">
            <Form.Label>大学</Form.Label>
            <Form.Control
              type="university"
              value={University}
              placeholder="University"
              onChange={event => {
                setUniversity(event.target.value);
              }}
            />
          </Form.Group>
          <Button
            onClick={register}
            variant="danger"
            type="submit"
            style={{ width: "100%", marginTop: "10%" }}
          >
            登録
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
