import React from "react";

//import PropTypes from 'prop-types';
import Live from "components/Live";
import Charts from "components/Charts";
import { useState } from "react";

export default function D1() {
  const [videoStartUrl, setVideoStartUrl] = useState("");
  const [videoDisplayDuration, setVideoDisplayDuration] = useState(0);
  return (
    <div className="myContainer">
      <h1>
        Deliverable 1: People counting system with single human-defined entrance
      </h1>

      <div className="content">
        <div className="column">
          <div className="content-box">
            <h3>Human traffic statistics</h3>
            <Charts
              entrance_index={0}
              setVideoUrl={(url) => {
                setVideoStartUrl(url);
              }}
              setVideoDuration={(duration) => {
                setVideoDisplayDuration(duration);
              }}
            />
          </div>
        </div>

        <div className="column">
          <div className="content-box">
            <h3>Video demo</h3>
            <Live
              startUrl={videoStartUrl}
              key={videoStartUrl}
              duration={videoDisplayDuration}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

D1.propTypes = {};
