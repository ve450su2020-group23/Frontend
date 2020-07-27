import React, { useState, useEffect } from "react";
//import PropTypes from 'prop-types';

import { ButtonGroup, Button } from "@material-ui/core";

import { DR1, DR2, DR3 } from "static/constant/CONSTANT.js";

const slides_src_array = [DR1, DR2, DR3];
const slides_name_array = [
  "Design Review 1",
  "Design Review 2",
  "Design Review 3",
];

export default function Notes() {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="myContainer">
      <h1>Development Notes</h1>
      <div className="slide">
        <div className="notes-button">
          <div className="button-group">
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              {slides_name_array.map((name, index) => (
                <Button onClick={() => setSlideIndex(index)}>{name}</Button>
              ))}
            </ButtonGroup>
          </div>
        </div>

        <div className="notes-title">{slides_name_array[slideIndex]}</div>

        <div className="frame-container">
          <iframe
            className="responsive-frame"
            src={slides_src_array[slideIndex]}
            name="Design%20Review%201"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

Notes.propTypes = {};
