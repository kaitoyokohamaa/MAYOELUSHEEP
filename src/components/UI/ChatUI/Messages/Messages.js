import React from "react";
import "./Messages.css";
const Messages = ({ messages }) => (
  <div>
    {messages.map(i => (
      <div key={i}>
        <div className="messageContainer justifyEnd">
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{i.text}</p>
          </div>
          <p className="sentText pr-10">{i.name}</p>
        </div>
        <div className="messageContainer justifyStart">
          <p className="sentText pl-10 ">相手</p>
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">久美子よ</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
export default Messages;
