import React, { useState } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";
import LOGO from "../../assets/img/logo.jpg";
import Divider from "@material-ui/core/Divider";
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
    <div className="bl_flexContent">
      <div className="bl_sidebar">
        <div className="bl_sidebar_body">
          <figure className="bl_sidebar_imgWrapper">
            <img src={LOGO} alt="logo" />
          </figure>
        </div>
      </div>
      <div className="bl_form">
        <div>
          <p className="bl_styleP locate">自己紹介文</p>
          <Divider />
        </div>
        <Form className="bl_formly">
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
            className="bl_btn size"
            onClick={register}
            variant="danger"
            type="submit"
          >
            登録
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
