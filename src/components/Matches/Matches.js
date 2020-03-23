import React, { Component } from "react";
import Sidebar from "../UI/Sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
class Matches extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={9}>
            <div>
              <div>
                <div>Matches</div>
                <ul>
                  <li>
                    <div>
                      <div></div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div></div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <button type="button">Ugly kitten</button>
                <button type="button">Atomic kitten</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Matches;
