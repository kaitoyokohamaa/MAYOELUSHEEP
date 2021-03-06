import React from "react";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import { Card, CardColumns } from "react-bootstrap";
const User = () => {
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <Sidebar />
      <CardColumns>
        <Card>
          <Card.Img
            style={{
              borderRadius: "18px 18px 0 0 "
            }}
            variant="top"
            src="images/users/4.jpg"
          />
          <Card.Body>
            <Card.Title>kaikai,22</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            style={{
              borderRadius: "18px 18px 0 0 "
            }}
            variant="top"
            src="images/users/2.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            style={{
              borderRadius: "18px 18px 0 0 "
            }}
            variant="top"
            src="images/users/1.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
          </Card.Body>
        </Card>{" "}
        <Card>
          <Card.Img
            style={{
              borderRadius: "18px 18px 0 0 "
            }}
            variant="top"
            src="images/users/1.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
          </Card.Body>
        </Card>{" "}
        <Card>
          <Card.Img
            style={{
              borderRadius: "18px 18px 0 0 "
            }}
            variant="top"
            src="images/users/1.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
          </Card.Body>
        </Card>{" "}
      </CardColumns>
    </div>
  );
};
export default User;
