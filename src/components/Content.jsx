import React from "react";
import JumboTron from "./JumboTron";
import Carousel from "./Carousel";

const Content = () => {
  return (
    <>
      <main role="main">
        <div className="container">
          <br />
          <Carousel />
          <JumboTron />
        </div>
      </main>
    </>
  );
};

export default Content;
