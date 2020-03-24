import React from "react";
import { NavLink } from "react-router-dom";

const Card = props => {
  return (
    <>
      <div className="col-sm">
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <NavLink
              className="nav-link btn btn-primary"
              to={props.linkAddress}
            >
              {props.linkAddress}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
