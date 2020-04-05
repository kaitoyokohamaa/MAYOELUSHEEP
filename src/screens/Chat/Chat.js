import React, { useState, useEffect } from "react";
import Input from "../../components/UI/ChatUI/Input/Input";
import MessagesChat from "../../../src/components/UI/ChatUI/Messages/Messages";
import "./Chat.css";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import Midlebar from "../../components/UI/ChatUI/Midlebar/Midlebar";
import { Col, Row } from "react-bootstrap";
// import axios from "../../axios";
import ScroolToBottom from "react-scroll-to-bottom";
import { css } from "glamor";

const Chat = () => {
  const [Message, setMessage] = useState("");
  const [Name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  const submitHandler = event => {
    event.preventDefault();
    addIngredientHandler({ name: Name, text: Message });
  };

  useEffect(() => {
    const name = localStorage.getItem("name");
    setName(name);
  }, []);

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
  //       setMessages(loadedIngredients);
  //     });
  // }, []);

  const ROOT_CSS = css({
    height: 600,
    width: 650
  });

  const addIngredientHandler = text => {
    fetch("https://react-hooks-update-676a6.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(text),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        setMessages(prevIngredients => [
          ...prevIngredients,
          { id: responseData.name, ...text }
        ]);
      });
  };

  return (
    <div>
      <Row style={{ width: "100%" }}>
        <Col md={3}>
          <div style={{ paddingLeft: "30px" }}>
            <Sidebar />
          </div>
        </Col>
        <Col md={3}>
          <div>
            <Midlebar />
          </div>
        </Col>
        <Col md={6}>
          <div style={{ textAlign: "right" }}>
            <div className="chatContainer">
              <ScroolToBottom className={ROOT_CSS}>
                <MessagesChat messages={messages} />
              </ScroolToBottom>
              <form onSubmit={submitHandler}>
                <Input
                  Message={Message}
                  setMessage={setMessage}
                  submitHandler={submitHandler}
                />
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Chat;
