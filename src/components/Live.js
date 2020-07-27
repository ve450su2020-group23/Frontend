import React from "react";
//import PropTypes from 'prop-types';

export default function Live() {
  return (
    <div>
      <div className="frame-container">
        <iframe
          className="responsive-frame"
          src="//player.bilibili.com/player.html?aid=498960339&bvid=BV1rK411J7pn&cid=216125044&page=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        >
          {" "}
        </iframe>
        ;
      </div>
    </div>
  );
}

Live.propTypes = {};
