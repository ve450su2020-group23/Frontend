import React from "react";

//import PropTypes from 'prop-types';
import Live from "components/Live";
import MEC from "components/MultiEntrancesCharts";

export default function D2() {
  return (
    <div className="myContainer">
      <h1>
        Deliverable 2: People counting system with automatic entrances detection
        and separated counting
      </h1>

      <div className="content">
        <div className="column">
          <div className="content-box">
            <h3>Human traffic statistics</h3>
            <MEC />
          </div>
        </div>

        <div className="column">
          <div className="content-box">
            <h3>Live demo</h3>

            <Live />
          </div>
        </div>
      </div>
    </div>
  );
}

D2.propTypes = {};
