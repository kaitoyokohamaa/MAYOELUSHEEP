import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "../../axios";
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
      <div>
        <input type="file" onChange={this.fileSelectedHandler} />
        <Button onClick={this.fileUploadHandler} variant="danger">
          登録
        </Button>
      </div>
    );
  }
}
