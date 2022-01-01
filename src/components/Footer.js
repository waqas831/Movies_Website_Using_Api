import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className=" container-fluid footer">
      <div onClick={() => navigate("/")}>Trending &nbsp; &nbsp; &nbsp; &nbsp;
      <span><i className="fas fa-rss"></i></span>
      </div>
      <div onClick={() => navigate("/movies")}>Movies &nbsp; &nbsp; &nbsp; &nbsp;
      <span><i className="fas fa-film"></i></span>
      </div>

      <div onClick={() => navigate("/series")}>Tv Shows &nbsp; &nbsp; &nbsp; &nbsp;
      <span><i className="fas fa-tv"></i></span>
      </div>
      <div onClick={() => navigate("/search")}>Search  &nbsp; &nbsp; &nbsp; &nbsp;
      <span><i className="fas fa-search"></i></span>
      </div>
    </div>
  );
};

export default Footer;
