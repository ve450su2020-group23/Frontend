import React from "react";
//import PropTypes from 'prop-types';

export default function Video() {
  return (
    <div className="myContainer">
      <h2>Demo Video</h2>
      <div className="slide">
        <iframe
          width="960"
          height="569"
          src="https://www.youtube.com/embed/ZkAkdH1aLRU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

Video.propTypes = {};
