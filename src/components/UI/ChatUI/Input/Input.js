import React from "react";
import "./Input.css";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
const Input = ({ message, setMessage, submitHandler }) => {
  return (
    <form style={{ display: "flex" }}>
      <TextField
        style={{
          width: "80%",
          marginLeft: "100px"
        }}
        color="secondary"
        className="MuiInputBase-input"
        type="text"
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event =>
          event.key === "Enter" ? submitHandler(event) : null
        }
      ></TextField>

      <Send
        className="send"
        action="/chat"
        color="default"
        onClick={event => submitHandler(event)}
      ></Send>
    </form>
  );
};
export default Input;
