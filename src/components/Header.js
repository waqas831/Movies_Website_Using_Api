import React from "react";
import Footer from "./Footer";

const Header = () => {
  const myscrollfun = () => {
   
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="header" onClick={myscrollfun}>
        Entertainment Hub
      </div>

      <Footer />
    </>
  );
};

export default Header;
