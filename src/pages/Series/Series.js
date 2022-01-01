import GenreOptionsPage from "../Movies/GenreOptionsPage";
import SinglePostFetching from "../Trending/SinglePostFetching";
import Pagination23 from "../Trending/Pagination23";
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Series = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [genretype, setGenretype] = useState("discover");
  const fetchdata = async () => {
    const data = await axios.get(
      `
          https://api.themoviedb.org/3/${genretype}/tv?api_key=d75873963de8789b68f881275cf00220&language=en-US&sort_b
          y=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
    console.log("saaaaaaaaaaaaaaaaaaaaa", data);
    setData(data.data.results);
  };
  useEffect(() => {
    fetchdata();
    //eslint-disable-next-line
  }, [page, genretype]);
  return (
    <>
      <div>
        <h1 className="app">Tv Series</h1>
      </div>
      <GenreOptionsPage setGenretype={setGenretype} />
      <div>
        <div className="mainhello">
          {data.map((item, index) => {
            return (
              <SinglePostFetching item={item} key={index} name="Tv Series" />
            );
          })}
        </div>
        <Pagination23 setpagenumber={setPage} pagenumber={page} />
      </div>
      <Outlet />
    </>
  );
};

export default Series;
