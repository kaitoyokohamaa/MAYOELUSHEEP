import React from "react";
import "./Input.css";

const Input = ({ message, setMessage, submitHandler }) => {
  return (
    <form>
      <input
        className="input"
        type="text"
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event =>
          event.key === "Enter" ? submitHandler(event) : null
        }
      ></input>
      <button className="sendButton" onClick={event => submitHandler(event)}>
        送信
      </button>
    </form>
  );
};
export default Input;
