import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Item from "./Item";

const ChoiceMenu = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col className="d-flex justify-content-center ">
          <Button
            className="btn-warning rounded-0 text-uppercase p-4 pt-2 pb-2 btn"
            style={{ fontSize: "22px", fontWeight: "550" }}
          >
            Always tasty burger
          </Button>
        </Col>
      </Row>
      <div className="d-flex justify-content-center mt-2">
        <h1 className="text-uppercase fw-bolder ">choose & enjoy</h1>
      </div>
      <div className="d-flex justify-content-center ">
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </p>
      </div>
      <Container className="d-flex justify-content-around item-menu">
        <Item />
        <Item />
        <Item />
      </Container>
    </Container>
  );
};

export default ChoiceMenu;
