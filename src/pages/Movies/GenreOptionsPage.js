import React, { useEffect, useState } from "react";
import axios from "axios";

const GenreOptionsPage = ({setGenretype}) => {
  const [genre, setGenre] = useState([]);

  const fetchdata = async () => {
      

    const data = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=d75873963de8789b68f881275cf00220&language=en-US`
    );
  
    setGenre(data.data.genres);
  };

  const clicktheitem = (e) => {
    const mytype=e.toLowerCase();
    setGenretype(mytype);
    alert('sorryyy all that part is not ready yet')
  };
  

  useEffect(() => {
    fetchdata();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="genre">
      {genre.map((item, index) => {
        return (
        
            <h1 className="list" onClick={()=>clicktheitem(item.name)} key={index}>
              {item.name}
            </h1>
          
        );
      })}
    </div>
  );
};

export default GenreOptionsPage;
