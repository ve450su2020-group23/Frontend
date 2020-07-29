import React from "react";
//import PropTypes from 'prop-types';

export default function Live() {
  return (
    <div>
      <div className="frame-container">
        <div className="responsive-frame">
          <video controls>
            <source
              src="https://ve450videos.s3-ap-southeast-1.amazonaws.com/video_0_6.mp4"
              type="video/mp4"
            ></source>
          </video>
          ;
        </div>
      </div>
    </div>
  );
}

Live.propTypes = {};
