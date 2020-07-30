import React from "react";
//import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { VIDEO_DURATION, VIDEO_URL_PREFIX } from "static/constant/CONSTANT";

Date.prototype.isValid = function () {
  return this.getTime() === this.getTime();
};

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

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
      setStartTimestamp(parseInt(split_array[split_array.length - 1]));
      setCurrentTimestamp(parseInt(split_array[split_array.length - 1]));
      setEndTimestamp(parseInt(split_array[split_array.length - 1]) + duration);
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
    let url = VIDEO_URL_PREFIX + "video_" + newTimestamp.toString() + ".webm";
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
    let url = VIDEO_URL_PREFIX + "video_" + newTimestamp.toString() + ".webm";
    setCurrentTimestamp(currentTimestamp + VIDEO_DURATION);
    setVideoCurrentUrl(url);
    console.log(videoCurrentUrl);
  }

  console.log("currentVideoUrl: ", videoCurrentUrl);

  var videoStartDate = new Date(currentTimestamp * 1000);
  var videoEndDate = new Date((currentTimestamp + VIDEO_DURATION) * 1000);

  var videoTime = (
    <h3>
      {" "}
      Video time: {currentTimestamp} - {currentTimestamp + 59}
    </h3>
  );
  if (
    videoStartDate &&
    videoEndDate &&
    videoStartDate.isValid() &&
    videoEndDate.isValid()
  ) {
    videoTime = (
      <h3>
        {" "}
        Video time: {videoStartDate.getMonth().toString()}.
        {videoStartDate.getDate().toString()}{" "}
        {videoStartDate.getHours().toString()}:
        {addZero(videoStartDate.getMinutes()).toString()} -{" "}
        {videoEndDate.getMonth().toString()}.{videoEndDate.getDate().toString()}{" "}
        {videoEndDate.getHours().toString()}:
        {addZero(videoEndDate.getMinutes()).toString()}
      </h3>
    );
  }
  return (
    <div>
      <div className="button-group">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={previous}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </ButtonGroup>
      </div>
      {videoTime}
      Current Video Url: {videoCurrentUrl}
      <div className="frame-container">
        <div className="responsive-frame">
          <video
            muted
            autoPlay
            controls
            src={videoCurrentUrl}
            type='video/webm; codecs="vp8, vorbis"'
          ></video>
        </div>
      </div>
    </div>
  );
}

Live.propTypes = {};

//<source src={videoCurrentUrl} key={videoCurrentUrl} type="video/mp4"></source>
