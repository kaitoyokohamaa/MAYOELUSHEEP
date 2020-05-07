import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Divider from "@material-ui/core/Divider";
import { Redirect } from "react-router-dom";

import axios from "../../axios";
import classes from "./Signup.module.css";
const Signup = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Old, setOld] = useState("");
  const [Gender, setGender] = useState("");
  const [Password, setPassword] = useState("");
  const [Password_confirm, setPassword_confirm] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Auth, setAuth] = useState(false);

  const signup = event => {
    event.preventDefault();
    setLoading(false);
    let data = {
      user_params: {
        name: Name,
        age: Old,
        gender: Gender,
        mail: Email,
        password: Password,
        password_confirm: Password_confirm
      }
    };
    axios
      .post("/v1/sign_up", data)
      .then(json => {
        //ユーザ生成時に以下の情報をローカルストレージに入れる。
        console.log(json.data);
        window.localStorage.setItem("token", json.data.token);
        window.localStorage.setItem("name", json.data.name);
        window.localStorage.setItem("id", json.data.id);

        if (formIsValid() && json.status === 200) {
          setLoading(true);
          setAuth(true);
        } else {
          setLoading(true);
          alert("ちゃんと入力してください");
        }
      })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        setLoading(true);
        console.log(err, err.data);
        alert(err, err.data);
      });
    console.log("RENDRING INGREDIENTS", Name);
  };

  useEffect(() => {
    console.log("RENDRING INGREDIENTS", Name);
  }, [Name]);
  const formIsValid = () => Password === Password_confirm;

  console.log(Password);
  console.log(Password_confirm);
  const age = Array.from(new Array(60));
  return (
    <div>
      {Loading ? (
        <div className={classes.bl_form}>
          <div className={classes.bl_Inforamation}>
            <p className={classes.bl_InforamationP}>新規登録</p>
            <p className={classes.bl_averageFont}>
              以下の項目にご記入の上、「始める」ボタンを押してください。
            </p>
          </div>
          <Divider />
          <Form className={classes.bl_averageFont}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>お名前</Form.Label>
              <Form.Control
                name="name"
                value={Name}
                type="name"
                placeholder="名前"
                onChange={event => {
                  setName(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicEmail"
              className={classes.form_group}
            >
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control
                name="email"
                value={Email}
                type="email"
                placeholder="メールアドレス"
                onChange={event => {
                  setEmail(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className={classes.form_group}>
              <Form.Label>年齢</Form.Label>
              <Form.Control
                className={classes.form_group}
                as="select"
                name="old"
                value={Old}
                onChange={event => {
                  setOld(event.target.value);
                }}
              >
                {age.map((ages, i) => {
                  if (i > 17) {
                    return <option key={ages}>{i}</option>;
                  }
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group>
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
                placeholder="パスワード"
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>パスワード再確認</Form.Label>
              <Form.Control
                name="password_confirm"
                type="password"
                value={Password_confirm}
                placeholder="パスワード再確認"
                onChange={event => {
                  setPassword_confirm(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
          <div className={classes.btn}>
            <Button
              className={classes.btn_size}
              variant="danger"
              type="submit"
              onClick={signup}
            >
              始める
            </Button>
          </div>
        </div>
      ) : (
        <div className={classes.bl_form}>
          <div className={classes.bl_Inforamation}>
            <p className={classes.bl_InforamationP}>新規登録</p>
            <p className={classes.bl_averageFont}>
              以下の項目にご記入の上、「始める」ボタンを押してください。
            </p>
          </div>
          <Divider />
          <Form className={classes.bl_averageFont}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>お名前</Form.Label>
              <Form.Control
                name="name"
                value={Name}
                type="name"
                placeholder="名前"
                onChange={event => {
                  setName(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicEmail"
              className={classes.form_group}
            >
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control
                name="email"
                value={Email}
                type="email"
                placeholder="メールアドレス"
                onChange={event => {
                  setEmail(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className={classes.form_group}>
              <Form.Label>年齢</Form.Label>
              <Form.Control
                className={classes.form_group}
                as="select"
                name="old"
                value={Old}
                onChange={event => {
                  setOld(event.target.value);
                }}
              >
                {age.map((ages, i) => {
                  if (i > 17) {
                    return <option key={ages}>{i}</option>;
                  }
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group>
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
                placeholder="パスワード"
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>パスワード再確認</Form.Label>
              <Form.Control
                name="password_confirm"
                type="password"
                value={Password_confirm}
                placeholder="パスワード再確認"
                onChange={event => {
                  setPassword_confirm(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
          <div className={classes.btn}>
            <div className={classes.Loader}>Loading...</div>
          </div>
        </div>
      )}
      {Auth ? <Redirect to={"/profile"} /> : null}
    </div>
  );
};
export default Signup;
