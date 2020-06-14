import React from "react";
import "assets/css/App.css";
// components

import Stopwatch from "components/stopwatch.js";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Test = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Stopwatch />
        </Col>
      </Row>
    </Container>
  );
};

export default Test;
