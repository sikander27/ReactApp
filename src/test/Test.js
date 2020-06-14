import React from "react";
import "assets/css/App.css";
// components


import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ClickCounter from "../components/ClickCounter";
import HoverCounter from "../components/HoverCounter";


const Test = () => {
  return (
    <Container>
      <Row>
        <Col>
        <h1>hello</h1>
        <ClickCounter/>
        <HoverCounter/>
        </Col>
      </Row>
    </Container>
  );
};

export default Test;
