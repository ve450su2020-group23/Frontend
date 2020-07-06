import React, { useState, useEffect } from "react";
//import PropTypes from 'prop-types';

import { ButtonGroup, Button } from "@material-ui/core";

import { DR1, DR2, pre_ex } from "static/constant/CONSTANT.js";

const slides_src_array = [DR1, DR2, pre_ex];
const slides_name_array = [
  "Design Review 1",
  "Design Review 2",
  "Presentation Exercise",
];

export default function Notes() {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="myContainer">
      <h2>Development Notes</h2>
      <div className="slide">
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

        <h2>{slides_name_array[slideIndex]} </h2>

        <iframe
          src={slides_src_array[slideIndex]}
          frameborder="0"
          width="960"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
}

Notes.propTypes = {};
