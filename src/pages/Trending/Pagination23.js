import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
const Pagination23 = ({ pagenumber, setpagenumber }) => {
  const handleClickprevious = () => {
    setpagenumber(pagenumber - 1);
    window.scrollTo(0, 0);
  };

  const handleClicknext = () => {
    setpagenumber(pagenumber + 1);
    window.scrollTo(0, 0);
  };

  return (
    <Container
      style={{ paddingBottom: "2%", paddingTop: "2%" }}
      className="ms-auto page"
    >
      <Row>
        <Col md={6}>
          <Button disabled={pagenumber <= 1} onClick={handleClickprevious}>
            Previous
          </Button>
        </Col>
        <Col md={6}>
          <Button onClick={handleClicknext}>Next</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Pagination23;
