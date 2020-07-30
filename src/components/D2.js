import React from "react";

//import PropTypes from 'prop-types';
import Live from "components/Live";
import MEC from "components/MultiEntrancesCharts";
import { useState } from "react";

export default function D2() {
  const [videoStartUrl, setVideoStartUrl] = useState("");
  const [videoDisplayDuration, setVideoDisplayDuration] = useState(0);
  return (
    <div className="myContainer">
      <h1>
        Deliverable 1: People counting system with automatic entrances detection
        and separated counting
      </h1>

      <div className="content">
        <div className="column">
          <div className="content-box">
            <h3>Human traffic statistics</h3>
            <MEC
              setVideoStartUrl={(url) => {
                setVideoStartUrl(url);
              }}
              setVideoDuration={(duration) => {
                setVideoDisplayDuration(duration);
              }}
            />
            *Note: the number of <b>LINE/BAR</b> at each <b>timestamp </b>is{" "}
            <b>
              the net in/out value in the previous time interval (between two
              timestamp).{" "}
            </b>{" "}
            For <b>TABLE</b>, the number is <b>the accumulated value.</b>
          </div>
        </div>

        <div className="column">
          <div className="content-box">
            <h3>Video demo</h3>

            <Live startUrl={videoStartUrl} key={videoStartUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

D2.propTypes = {};
