import React from "react";
import persons from "../images/two-person-on-scaffolding-painting-wall-1276662.jpg";

const OverlayCard = ({ service }) => {
  return (
    <>
      <div class="card bg-dark text-white">
        <img src={persons} class="card-img" />
        <div class="card-img-overlay">
          <h5 class="card-title">{service.name}</h5>
          <p class="card-text">{service.description}</p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </>
  );
};

export default OverlayCard;
