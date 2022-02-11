import React from "react";
import "../../App.scss";
import Portfolio from "../portfolio/portfolio.js";
import Connect from "../howtoconnect/connect.js";

export default function about() {
  return (
    <div className="modulefade">
      <Portfolio />
      <Connect />
    </div>
  );
}
