import React from "react";
import Card from './Card'

const JumboTron = () => {
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <Card linkAddress={"About"} />
          <Card linkAddress={"about"} />
          <Card linkAddress={"about"} />
        </div>
      </div>
    </>
  );
};

export default JumboTron;
