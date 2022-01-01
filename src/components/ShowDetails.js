import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { img_500 } from "../config/config";
import { useLocation } from "react-router-dom";
import Rating from "../pages/Trending/Rating";
const ShowDetails = () => {
  const location = useLocation();
  const { state } = location;
  const data = state.data;
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col>
          <h2>{data.title}</h2>
          <Image
            src={`${img_500}/${data.backdrop_path}`}
            alt=""
            style={{ width: "100%" }}
            fluid
          />
          <div style={{ alignItems: "center", textAlign: "justify" }}>
            {data.overview}
          </div>
          <Rating rating={data.vote_average} />
          <Row>
            <Col md={6}>
              Type: {data.media_type ? data.media_type : "Not Avalible"}
            </Col>
            <Col md={6}>Released: {data.release_date}</Col>
          </Row>
          <Row>
            <Col md={6}>Watched: {data.popularity}</Col>
            <Col md={6}>Likes: {data.vote_count}</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowDetails;
