import React, { useEffect } from "react";
import "./Messages.css";
const Messages = ({ messages, name }) => {
  console.log(name);
  let currentUser = localStorage.getItem("name");

  let isSentByCurrentUser = false;

  if (name === currentUser) {
    isSentByCurrentUser = true;
  } else {
    isSentByCurrentUser = false;
  }
  console.log(name);
  return (
    <div>
      {messages.map(index => (
        <div key={index.id}>
          {isSentByCurrentUser ? (
            <div className="messageContainer justifyEnd">
              <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{index.text}</p>
              </div>
              <p className="sentText pr-10">{index.name}</p>
            </div>
          ) : (
            <div className="messageContainer justifyStart">
              <p className="sentText pl-10 ">相手</p>
              <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{index.text}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Messages;
