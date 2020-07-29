import React from "react";
//import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { VIDEO_DURATION, VIDEO_URL_PREFIX } from "static/constant/CONSTANT";
export default function Live({ startUrl, duration }) {
  const [videoCurrentUrl, setVideoCurrentUrl] = useState(startUrl);
  const [startTimestamp, setStartTimestamp] = useState(0);
  const [currentTimestamp, setCurrentTimestamp] = useState(0);
  const [endTimestamp, setEndTimestamp] = useState(0);

  useEffect(() => {
    console.log("startUrl: ", startUrl);
    setVideoCurrentUrl(startUrl);

    if (startUrl) {
      let split_array = startUrl.split("_");
      setStartTimestamp(parseInt(split_array[split_array.length - 2]));
      setCurrentTimestamp(parseInt(split_array[split_array.length - 2]));
      setEndTimestamp(parseInt(split_array[split_array.length - 2]) + duration);
    }
  }, [startUrl, duration]);

  function previous() {
    if (currentTimestamp - VIDEO_DURATION < startTimestamp) {
      alert("No more previous videos!");
      console.log("currentTimestamp: ", currentTimestamp);
      console.log("startTimestamp: ", startTimestamp);
      console.log("No more previous videos!");
      return;
    }
    let newTimestamp = currentTimestamp - VIDEO_DURATION;
    let url =
      VIDEO_URL_PREFIX +
      "video_" +
      newTimestamp.toString() +
      "_" +
      (newTimestamp + VIDEO_DURATION - 1).toString() +
      ".mp4";
    setCurrentTimestamp(newTimestamp);
    setVideoCurrentUrl(url);
    console.log(videoCurrentUrl);
  }

  function next() {
    if (currentTimestamp + VIDEO_DURATION >= endTimestamp) {
      alert("No more next videos!");
      console.log("currentTimestamp: ", currentTimestamp);
      console.log("endTimestamp: ", endTimestamp);
      console.log("No more next videos!");
      return;
    }
    let newTimestamp = currentTimestamp + VIDEO_DURATION;
    let url =
      VIDEO_URL_PREFIX +
      "video_" +
      newTimestamp.toString() +
      "_" +
      (newTimestamp + VIDEO_DURATION - 1).toString() +
      ".mp4";
    setCurrentTimestamp(currentTimestamp + VIDEO_DURATION);
    setVideoCurrentUrl(url);
    console.log(videoCurrentUrl);
  }

  console.log("currentVideoUrl: ", videoCurrentUrl);
  return (
    <div>
      <div className="button-group">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={previous}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </ButtonGroup>
      </div>
      <div className="frame-container">
        <div className="responsive-frame">
          <video controls autoPlay muted src={videoCurrentUrl}></video>
        </div>
      </div>
    </div>
  );
}

Live.propTypes = {};

//<source src={videoCurrentUrl} key={videoCurrentUrl} type="video/mp4"></source>
