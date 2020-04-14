import React, { useState, useEffect } from "react";
import Input from "../../components/UI/ChatUI/Input/Input";
// import MessagesChat from "../../../src/components/UI/ChatUI/Messages/Messages";
import "./Chat.css";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import Midlebar from "../../components/UI/ChatUI/Midlebar/Midlebar";
import { Col, Row } from "react-bootstrap";
import Divider from "@material-ui/core/Divider";
// import axios from "../../axios";
import ScroolToBottom from "react-scroll-to-bottom";

import { css } from "glamor";

const Chat = () => {
  // const [Message, setMessage] = useState("");
  // const [Name, setName] = useState("");
  // const [messages, setMessages] = useState([]);
  // const [user, setUser] = useState("");
  // const submitHandler = event => {
  //   event.preventDefault();
  //   addIngredientHandler({ name: Name, text: Message });
  // };

  // useEffect(() => {
  //   const name = localStorage.getItem("name");
  //   setName(name);
  // }, []);

  // useEffect(() => {
  //   fetch("https://react-hooks-update-676a6.firebaseio.com/ingredients.json")
  //     .then(response => response.json())
  //     .then(responseData => {
  //       console.log(responseData);
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           name: responseData[key].name,
  //           text: responseData[key].text
  //         });
  //       }
  //       if (responseData.name === { Name }) {
  //         alert(responseData.name);
  //       } else {
  //         alert("alert");
  //       }
  //       setMessages(loadedIngredients);
  //     });
  // }, [Name]);

  // // buildDocKey = friend => [friend, Name].sort().join(":");
  const ROOT_CSS = css({
    height: 730,
    width: 830
  });

  // const addIngredientHandler = text => {
  //   fetch("https://react-hooks-update-676a6.firebaseio.com/ingredients.json", {
  //     method: "POST",
  //     body: JSON.stringify(text),
  //     headers: { "Content-Type": "application/json" }
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(responseData => {
  //       setMessages(prevIngredients => [
  //         ...prevIngredients,
  //         { id: responseData.id, ...text }
  //       ]);
  //       console.log(messages);
  //     });
  // };

  return (
    <div
      style={{
        padding: 0
      }}
    >
      <Row style={{ width: "100%" }}>
        <Col
          md={2}
          style={{
            padding: 0
          }}
        >
          <div>
            <Sidebar />
          </div>
        </Col>
        <Col
          md={3}
          style={{
            padding: 0
          }}
        >
          <div>
            <Midlebar />
          </div>
        </Col>
        <Col
          md={7}
          style={{
            padding: 0
          }}
        >
          <div>
            <div className="chatContainer">
              <div className="chatHeader">
                <h4>さんと会話中</h4>
                <Divider></Divider>
              </div>
              <ScroolToBottom className={ROOT_CSS}>
                {/* <MessagesChat /> */}
              </ScroolToBottom>
              <Input
              // Message={Message}
              // setMessage={setMessage}
              // submitHandler={submitHandler}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Divider></Divider>
    </div>
  );
};
export default Chat;
