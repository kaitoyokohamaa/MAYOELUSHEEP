import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../axios";
import LOGO from "../../assets/img/logo.jpg";
import { Col, Row, Container, Button, ProgressBar } from "react-bootstrap";
import "./Profile.css";
export default class Profile extends Component {
  state = {
    images: null
  };
  fileSelectedHandler = event => {
    this.setState({
      images: event.target.files[0]
    });
  };
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("images", this.state.images, this.state.images.name);
    axios.post("/me/upload_image", fd).then(res => {
      console.log(res);
    });
  };
  render() {
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
          <div className="sidebar">
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
              <ProgressBar animated now={45} />
            </div>
          </div>
          <Container
            style={{
              textAlign: "center"
            }}
          >
            <Row>
              <Col>
                <div>
                  <p className="mainname">
                    プロフィールにしたい画像をアップロードしよう！
                  </p>
                  <label
                    className="img_upload"
                    htmlFor="file_upload"
                    onChange={this.fileSelectedHandler}
                  >
                    +
                  </label>
                  <input
                    style={{ padding: "25%", display: "none" }}
                    id="file_upload"
                    type="file"
                    multiple
                    onChange={this.fileSelectedHandler}
                  />
                </div>

                <Button
                  variant="danger"
                  className="registerBtn"
                  type="button"
                  onClick={this.fileUploadHandler}
                >
                  登録
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
