import React from "react";
import idLogo from "../images/id-logo.png";
import stib from "../images/stib-logo.png";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <br />
        <div class="container">
          <div class="row">
            <div className="col-sm text-center">
              <img src={idLogo} className="rounded" />
            </div>
            <div class="col-sm">
              <img src={stib} className="rounded" />
            </div>
            <div class="col-sm">
              <img src={idLogo} className="rounded" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
