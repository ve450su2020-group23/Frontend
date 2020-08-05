import React from "react";

//import PropTypes from 'prop-types';
import Predict from "components/Predict";

export default function D3() {
  let charts = Predict(0);
  return (
    <div className="myContainer">
      <h1>Deliverable 2: People flow statistics prediction</h1>

      <div className="insecure_instruction">
        (Please allow insecure content for proper display. For Chrome / Edge
        user: Not Secure Tag (left of url) -> Site Permissions -> Insecure
        Content: Allow. Or follow this{" "}
        <a target="_blank" href="https://docs.qq.com/doc/DZldQTFVTR3FSVm16">
          {" "}
          doc{" "}
        </a>
        . )
      </div>

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
            <div>
              Right now we only have data in time range <b>8.1 - 8.10</b> for
              display, please test in this time range.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

D3.propTypes = {};
