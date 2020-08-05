import React from "react";
//import PropTypes from 'prop-types';

export default function Video() {
  return (
    <div className="myContainer">
      <h1>Demo Video</h1>
      <div className="slide">
        <div className="demo-frame-container">
          <div className="responsive-frame">
            <video
              muted
              autoPlay
              controls
              src="https://ve450videos.s3-ap-southeast-1.amazonaws.com/demo_video.mp4"
              type="video/mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

Video.propTypes = {};

/*
          <iframe
            className="responsive-frame"
            src="https://www.youtube.com/embed/ZkAkdH1aLRU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          */
