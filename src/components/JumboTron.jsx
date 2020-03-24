import React from "react";
import Card from './Card'

const JumboTron = () => {
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <Card linkAddress={"About"} name={"Om oss"} />
          <Card linkAddress={"Services"} name={"Tjänster"} />
          <Card linkAddress={"about"} name={"Om oss"} />
        </div>
      </div>
    </>
  );
};

export default JumboTron;
