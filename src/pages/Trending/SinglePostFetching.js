import { Col } from "react-bootstrap";
import { img_300 } from "../../config/config";
import React from "react";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const SinglePostFetching = ({ item ,name}) => {
  const navigate = useNavigate();
  const {
    poster_path,
    title,
    id,
    vote_average,
    original_name,
    media_type,
    release_date,
  } = item;
  return (
    <Col key={id}
      style={{ width: "500px" }}
      md={4}
      className="main_single"
      onClick={() => navigate("/singlepost", { state: { data: item } })}
    >
      <img src={`${img_300}/${poster_path}`} alt="" />
      <div className="under_main">
        <div className="under_main_title">{title ? title : original_name}</div>
        <div className="dateandtype">
          <div>{media_type ? media_type : name }</div>
          <div>{release_date ? release_date : `${year}-${month}-${day}`}</div>
        </div>
      </div>
      <Rating rating={vote_average} />
    </Col>
  );
};

export default SinglePostFetching;
