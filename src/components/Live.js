import React from "react";
//import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { ButtonGroup, Button } from "@material-ui/core";
import {
  VIDEO_DURATION,
  VIDEO_URL_PREFIX,
  time_zone_offset,
  server_url,
} from "static/constant/CONSTANT";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

Date.prototype.isValid = function () {
  return this.getTime() === this.getTime();
};

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getNowDate() {
  return new Date(Date.now() + time_zone_offset);
}

function assignTime(new_date, date, time) {
  new_date.setFullYear(date.getFullYear());
  new_date.setMonth(date.getMonth());
  new_date.setDate(date.getDate());
  new_date.setHours(time.getHours());
  new_date.setMinutes(time.getMinutes());
  new_date.setSeconds(time.getSeconds());
}

export default function Live({ startUrl, duration }) {
  const classes = useStyles();

  const [videoCurrentUrl, setVideoCurrentUrl] = useState(startUrl);
  //const [startTimestamp, setStartTimestamp] = useState(0);
  const [currentTimestamp, setCurrentTimestamp] = useState(0);
  //const [endTimestamp, setEndTimestamp] = useState(0);

  const [startDate, setStartDate] = React.useState(
    new Date(1595985891000 + time_zone_offset)
  );
  const [startTime, setStartTime] = React.useState(
    new Date(1595985891000 + time_zone_offset)
  );

  useEffect(() => {
    console.log("startUrl: ", startUrl);
    setVideoCurrentUrl(startUrl);

    if (startUrl) {
      let split_array = startUrl.split("/");
      //setStartTimestamp(parseInt(split_array[split_array.length - 1]));
      setCurrentTimestamp(parseInt(split_array[split_array.length - 1]));
      //setEndTimestamp(parseInt(split_array[split_array.length - 1]) + duration);
    }
  }, [startUrl, duration]);

  const fetchVideoUrl = async (newTimestamp = 0) => {
    let start_timestamp = getNowDate();

    if (startDate && startTime && startDate.isValid && startTime.isValid) {
      assignTime(start_timestamp, startDate, startTime);
    }

    if (newTimestamp != 0) {
      start_timestamp = newTimestamp;
    }

    let url =
      server_url +
      "video?ts=" +
      parseInt((start_timestamp - time_zone_offset) / 1000).toString();
    if (newTimestamp !== 0) {
      url = server_url + "video?ts=" + start_timestamp.toString();
    }
    //server_url + "video?ts=" + parseInt(start_timestamp - time_zone_offset / 1000).toString();
    console.log("axios video url: ", url);

    let result;
    try {
      result = await axios.get(url);
    } catch (error) {
      console.log(Object.keys(error), error.message);
      console.log("fetch video error: no video");
    }
    console.log("video axios finish");
    console.log("video axios result: " + result);
    console.log(result);

    if (result && result.data) {
      console.log("Fetch video url: ", result.data.video);
      let split_array = result.data.video.split("/");
      //setStartTimestamp(parseInt(split_array[split_array.length - 1]));
      console.log(parseInt(split_array[split_array.length - 1]));
      console.log(result.data.video);
      setCurrentTimestamp(parseInt(split_array[split_array.length - 1]));
      setVideoCurrentUrl(result.data.video);
    }
  };

  function previous() {
    /*
    if (currentTimestamp - VIDEO_DURATION < startTimestamp) {
      alert("No more previous videos!");
      console.log("currentTimestamp: ", currentTimestamp);
      console.log("startTimestamp: ", startTimestamp);
      console.log("No more previous videos!");
      return;
    }
    */

    let newTimestamp = currentTimestamp - 100;
    fetchVideoUrl(newTimestamp);
    /*
    let newTimestamp = currentTimestamp - VIDEO_DURATION;
    let url = VIDEO_URL_PREFIX + newTimestamp.toString() + ".webm";
    setCurrentTimestamp(newTimestamp);
    setVideoCurrentUrl(url);
    */
    console.log(videoCurrentUrl);
  }

  function next() {
    /*
    if (currentTimestamp + VIDEO_DURATION >= endTimestamp) {
      alert("No more next videos!");
      console.log("currentTimestamp: ", currentTimestamp);
      console.log("endTimestamp: ", endTimestamp);
      console.log("No more next videos!");
      return;
    }
    */

    let newTimestamp = currentTimestamp + 1;
    fetchVideoUrl(newTimestamp);

    /*
    let newTimestamp = currentTimestamp + VIDEO_DURATION;
    let url = VIDEO_URL_PREFIX + newTimestamp.toString() + ".webm";
    setCurrentTimestamp(currentTimestamp + VIDEO_DURATION);
    setVideoCurrentUrl(url);
    console.log(videoCurrentUrl);
    */
  }

  console.log("currentVideoUrl: ", videoCurrentUrl);

  console.log(currentTimestamp);
  var videoStartDate = new Date(currentTimestamp * 1000 + time_zone_offset);
  var videoEndDate = new Date(
    (currentTimestamp + VIDEO_DURATION) * 1000 + time_zone_offset
  );

  console.log("video start date: ");
  console.log(videoStartDate);

  console.log("video end date: ");
  console.log(videoEndDate);

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
        Video time: {(videoStartDate.getMonth() + 1).toString()}.
        {videoStartDate.getDate().toString()}{" "}
        {videoStartDate.getHours().toString()}:
        {addZero(videoStartDate.getMinutes()).toString()} -{" "}
        {(videoEndDate.getMonth() + 1).toString()}.
        {videoEndDate.getDate().toString()} {videoEndDate.getHours().toString()}
        :{addZero(videoEndDate.getMinutes()).toString()}
      </h3>
    );
  }
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="videoDate"
            label="videoDate"
            value={startDate}
            onChange={(date) => setStartDate(date)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />

          <KeyboardTimePicker
            margin="normal"
            id="videoTime"
            label="videoTime"
            value={startTime}
            onChange={(time) => setStartTime(time)}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>

      <Button
        variant="outlined"
        color="secondary"
        className="time-button"
        onClick={() => fetchVideoUrl()}
      >
        Fetch Video By Time
      </Button>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Video Url"
          value={videoCurrentUrl}
          onChange={(e) => {
            setVideoCurrentUrl(e.target.value);
          }}
        />
      </form>

      {videoTime}
      <div className="button-group">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={previous}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </ButtonGroup>
      </div>

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
        <div>
          Note: If video failed to load, it is either the video does not exist
          or the video is still processing. Please try another timestamp or try
          again later.
        </div>
      </div>
    </div>
  );
}

Live.propTypes = {};

//<source src={videoCurrentUrl} key={videoCurrentUrl} type="video/mp4"></source>
