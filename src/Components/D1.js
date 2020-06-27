import React from "react";

import Live from "components/Live";
import Charts from "components/Charts";

export default function D1() {
  return (
    <div className="myContainer">
      <h2>
        Deliverable 1: People counting system with single human-defined entrance
      </h2>

      <div className="content">
        <div className="column">
          <div className="content-box">
            <h3>Human traffic statistics</h3>
            <Charts />
          </div>
        </div>

        <div className="column">
          <div className="content-box">
            <h3>Live</h3>
            <Live />
          </div>
        </div>
      </div>
    </div>
  );
}
