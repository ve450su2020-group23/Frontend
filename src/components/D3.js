import React from "react";

//import PropTypes from 'prop-types';
import Predict from "components/Predict";

export default function D3() {
  let charts = Predict(0);
  return (
    <div className="myContainer">
      <h1>Deliverable 2: People flow statistics prediction</h1>

      <div className="content">
        <div className="column-lg">
          <div className="content-box">
            <h3>Human traffic statistics</h3>
            {charts}
            *Note: the number <b>LINE/BAR/TABLE</b> at each <b>timestamp </b>is{" "}
            <b>
              the accumulate in/out value starting from the beginning of that
              day.{" "}
            </b>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

D3.propTypes = {};
