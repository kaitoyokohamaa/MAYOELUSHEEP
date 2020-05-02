import React from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";
const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  if (user === user) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pr-10">{user}</p>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <p className="sentText pl-10 ">{user}</p>
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};
export default Message;
