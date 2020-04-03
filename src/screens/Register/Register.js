import React, { useState } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";
import LOGO from "../../assets/img/logo.jpg";
import "./Register.css";
const Register = () => {
  const [Profile, setProfile] = useState("");
  const [Campany, setCampany] = useState("");
  const [University, setUniversity] = useState("");
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
