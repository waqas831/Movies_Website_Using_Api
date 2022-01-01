import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SinglePostFetching from "../Trending/SinglePostFetching";
import Pagination23 from "../Trending/Pagination23";
import { Outlet } from "react-router-dom";
import GenreOptionsPage from "./GenreOptionsPage";

const Movies = () => {
  const location = useLocation();
  console.log("location", location);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [genretype, setGenretype] = useState("discover");

  const fetchdata = async () => {
    const data = await axios.get(
      `
      https://api.themoviedb.org/3/${genretype}/movie?api_key=d75873963de8789b68f881275cf00220&language=en-US&sort_b
      y=popularity.desc&include_adult=false&include_video=true&page=${page}&with_watch_monetization_types=flatrate`
    );
    console.log("saaaaaaaaaaaaaaaaaaaaa", data);
    setData(data.data.results);
  };
  useEffect(() => {
    fetchdata();
    //eslint-disable-next-line
  }, [page, genretype]);
  console.log("aaaaaaaaaaaaaaaa", genretype);

  return (
    <>
      <div>
        <h1 className="app">Movies</h1>
      </div>
      <GenreOptionsPage setGenretype={setGenretype} />
      <div>
        <Row className="mainhello">
          {data.map((item, index) => {
            return <SinglePostFetching item={item} name="Movie" />;
          })}
        </Row>
        <Pagination23 setpagenumber={setPage} pagenumber={page} />
      </div>
      <Outlet />
    </>
  );
};

export default Movies;
