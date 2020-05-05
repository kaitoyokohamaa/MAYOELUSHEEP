import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../axios";
import LOGO from "../../assets/img/logo.jpg";
import Divider from "@material-ui/core/Divider";
import { Button } from "react-bootstrap";
import "./Profile.css";

export default class Profile extends Component {
  state = {
    images: null
  };

  componentDidMount() {
    if (localStorage.getItem("name") === null) {
      return <Redirect to="/" />;
    }
  }

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
      <div className="bl_imgUpload">
        <div className="bl_flexContent">
          <div className="bl_sidebar">
            <div className="bl_sidebar_body">
              <figure className="bl_sidebar_imgWrapper">
                <img src={LOGO} alt="logo" />
              </figure>
            </div>
          </div>
          <div className="bl_imgUploadBody">
            <p className="bl_styleP">画像をアップロードしてください</p>
            <Divider />
            <label
              className="bl_imgUploadLabel"
              htmlFor="file_upload"
              onChange={this.fileSelectedHandler}
            >
              +
            </label>
            <input
              className="dlete_style"
              id="file_upload"
              type="file"
              multiple
              onChange={this.fileSelectedHandler}
            />
            <div>
              <Button
                variant="danger"
                className="bl_btn"
                type="button"
                onClick={this.fileUploadHandler}
              >
                登録
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
