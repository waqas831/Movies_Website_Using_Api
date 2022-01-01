import Pagination23 from "../Trending/Pagination23";
import SinglePostFetching from "../Trending/SinglePostFetching";
import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import { Container, Button, Form, FormControl } from "react-bootstrap";
import axios from "axios";

const Search = () => {
  const [page, setPage] = useState(1);
  const [key, setKey] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const searchData = async () => {
    if (search === "") {
      console.log("search is empty");
    } else {
      const data = await axios.get(`
      https://api.themoviedb.org/3/search/${
        key ? "tv" : "movie"
      }?api_key=d75873963de8789b68f881275cf00220&language=en-US&query=${search}&page=${page}&include_adult=false
      `);
      setData(data.data.results);
    }
  };
  useEffect(() => {
    searchData();
    //eslint-disable-next-line
  }, [page, key]);
  return (
    <Container style={{ marginTop: "3%" }}>
      <div className="app"></div>
      <Form className="d-flex" style={{ marginBottom: "5%" }}>
        <FormControl
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="myplaceholder me-2"
          aria-label="Search"
          style={{
            width: "80%",
            textAlign: "center",
            height: "50px",
            alignItems: "center",
          }}
        />
        <Button variant="outline-success" onClick={searchData} style={{color:'white',backgroundColor:'black'}}>
          Search  <span><i className="fas fa-search"></i></span>
        </Button>
      </Form>
      <Tabs
        id="controlled-tab-example"
        className="mb-3"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <div eventKey="movie" title="Search Movies">
          <div>
            <div className="mainhello">
              {data.map((item, index) => {
                return <SinglePostFetching item={item} key={index} />;
              })}
            </div>
            <Pagination23 setpagenumber={setPage} pagenumber={page} />
          </div>
        </div>
        <div eventKey="tv" title="Search TV Shows">
          <div>
            <div className="mainhello">
              {data.map((item, index) => {
                return <SinglePostFetching item={item} key={index} />;
              })}
            </div>
            {data.length === 0 ? '' : <Pagination23 setpagenumber={setPage} pagenumber={page} />}
            {/* <Pagination23 setpagenumber={setPage} pagenumber={page} /> */}
          </div>
        </div>
      </Tabs>
    </Container>
  );
};

export default Search;
