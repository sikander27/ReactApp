import React from "react";
import logo from "assets/img/logo.svg";
import "assets/css/App.css";
// components
import Clock from "components/clock.js";
import Timer from "components/timer.js";
import Stopwatch from "components/stopwatch.js";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <Timer />
        </Col>
        <Col>
          <Clock />
        </Col>
        <Col>
          <Timer />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
