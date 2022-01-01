import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SinglePostFetching from "./SinglePostFetching";
import Pagination23 from "./Pagination23";

const Treanding = () => {
  const location = useLocation();
  console.log("location", location);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hello, setHello] = useState(1);

  const fetchdata = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=d75873963de8789b68f881275cf00220&page=${page}`
    );
    setData(data.data.results);

    setHello(data.data.total_pages);
  };

  useEffect(() => {
    fetchdata();
    //eslint-disable-next-line
  }, [page]);
  return (
    <>
      <div>
        <h1 className="app">Trending {console.log(hello)} </h1>
      </div>
      <div></div>
      <div>
        <div className="mainhello">
          {data.map((item, index) => {
            return <SinglePostFetching item={item} key={index} />;
          })}
        </div>
        <Pagination23 setpagenumber={setPage} pagenumber={page} />
      </div>
    </>
  );
};

export default Treanding;
