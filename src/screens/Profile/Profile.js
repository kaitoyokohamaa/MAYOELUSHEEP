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
          <Container
            style={{
              textAlign: "center"
            }}
          >
            <Row>
              <Col>
                <div>
                  <label
                    htmlFor="file_upload"
                    onChange={this.fileSelectedHandler}
                    style={{
                      width: "30%",
                      backgroundColor: "#ececec",
                      borderRadius: "9%",
                      border: "1px solid",
                      padding: "21% 10%",
                      fontSize: "45px",
                      color: "#fff",
                      marginTop: "5%"
                    }}
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
                  style={{
                    width: "25%",
                    margin: "20px auto"
                  }}
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
