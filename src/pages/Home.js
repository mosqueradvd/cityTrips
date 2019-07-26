import React from "react";
import { Link } from "react-router-dom";

import "./styles/HomeStyles.css";
import astro from "../images/buildingsh.png";
import logo from "../images/cityTrips.png";

export default function Home() {
  return (
    <React.Fragment>
      <div className="Home">
        <div className="col-text">
          <img src={logo} alt="Conf Logo" />
          <h1>Another way of living the City</h1>
          <Link className="btn btn-primary" to="/badges">
            Book your next Trip
          </Link>
        </div>
        <img className="col-img" src={astro} alt="Astronauts" />
      </div>
    </React.Fragment>
  );
}
