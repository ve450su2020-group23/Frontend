import React from "react";
//import PropTypes from 'prop-types';

export default function Video() {
  return (
    <div className="myContainer">
      <h1>Introduction Video</h1>
      <div className="slide">
        <div className="frame-container">
          <iframe
            className="responsive-frame"
            src="//player.bilibili.com/player.html?aid=498960339&bvid=BV1rK411J7pn&cid=216125044&page=1"
            scrolling="no"
            border="0"
            frameBorder="no"
            allowFullScreen={true}
          >
            {" "}
          </iframe>
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
