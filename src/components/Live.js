import React from "react";
//import PropTypes from 'prop-types';

export default function Live() {
  return (
    <div>
      <div className="frame-container">
        <iframe
          className="responsive-frame"
          src="https://www.youtube.com/embed/ZkAkdH1aLRU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

Live.propTypes = {};
