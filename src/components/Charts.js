import React, { useState, useEffect } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
//import PropTypes from 'prop-types';
import MyLine from "./SimpleLineCharts";
import MyBar from "./PositiveAndNegativeBarChart";
import MyTable from "./Table";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { ButtonGroup, Button } from "@material-ui/core";
import {
  CHART_TYPES,
  TEST_API_DATA,
  REFRESH_RATE,
  SHOW_DATA_POINT_NUM,
  time_zone_offset,
  server_url,
} from "static/constant/CONSTANT";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import "static/css/charts.css";

Date.prototype.isValid = function () {
  return this.getTime() === this.getTime();
};

function switchChart(chartIndex, data, full_data, chartKey) {
  var showData = data;
  /*
  for (var i = dataStartIndex; showData.length < SHOW_DATA_POINT_NUM; i++) {
    i = i % data.length;
    showData.push(data[i]);
  }
  */

  var chart;
  var reverse_data = JSON.parse(JSON.stringify(full_data)).reverse();
  //var reverse_data = full_data;
  switch (chartIndex) {
    case 0:
      chart = <MyLine data={showData} key={chartKey} />;
      break;
    case 1:
      chart = <MyBar data={showData} key={chartKey} />;
      break;
    default:
      chart = <MyTable data={reverse_data} key={chartKey} />;
  }
  return <div className="charts-container">{chart}</div>;
}

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

export default function Charts(props) {
  const entrance_index = props.entrance_index;

  const [startDate, setStartDate] = React.useState(
    new Date(1596126935000 + time_zone_offset)
  );
  const [startTime, setStartTime] = React.useState(
    new Date(1596126935000 + time_zone_offset)
  );
  const [endDate, setEndDate] = React.useState(
    new Date(1596127535000 + time_zone_offset)
  );
  const [endTime, setEndTime] = React.useState(
    new Date(1596127535000 + time_zone_offset)
  );

  const [showData, setShowData] = React.useState([]);
  const [fullData, setFullData] = React.useState([]);
  const [chartIndex, setChartIndex] = useState(0);
  const [chartKey, setChartKey] = useState(0);
  const [updateWithTime, setUpdateWithTime] = React.useState(false);

  useEffect(() => {
    //const mock = new MockAdapter(axios);
    //mock.onGet("/data_start_end").reply(200, TEST_API_DATA);
    /*
    mock
      .onGet(server_url + "/video")
      .reply(
        200,
        "https://ve450videos.s3-ap-southeast-1.amazonaws.com/video_180_239.mp4"
      );
      */

    const fetchData = async (
      start_timestamp,
      end_timestamp,
      slice_newest_data
    ) => {
      start_timestamp = parseInt(start_timestamp / 1000);
      end_timestamp = parseInt(end_timestamp / 1000);
      const url =
        server_url +
        "data_start_end?start=" +
        start_timestamp.toString() +
        "&end=" +
        end_timestamp.toString();
      console.log("starttime: ", start_timestamp);
      console.log("end_time: ", end_timestamp);

      let result;
      try {
        console.log("chart fetch url: ", url);
        result = await axios.get(url);
      } catch (error) {
        console.log(Object.keys(error), error.message);
        if (error.response) {
          console.log(error.response.status);
        }
        //alert("no data!");
        console.log("fetch chart data error: no data");
      }
      console.log("chart axios finish");
      console.log("chart axios result: " + result);
      console.log(result);

      if (result && result.data) {
        const data = result.data;
        const start_time = Date.now();
        const in_array = data.in;
        const out_array = data.out;
        const timestamp_array = data.time;

        let new_data = [];
        let full_data = [];
        console.log("entrance: ", entrance_index);
        var time_interval = parseInt(in_array.length / 10);

        for (let i = 0; i < in_array.length; i++) {
          var date_object = new Date(timestamp_array[i] * 1000);
          var date =
            (date_object.getMonth() + 1).toString() +
            "." +
            (date_object.getDate() + 1).toString();
          console.log(date);

          var timestamp =
            date_object.getHours().toString() +
            ":" +
            addZero(date_object.getMinutes()).toString();

          full_data.push({
            Date: date,
            Timestamp: timestamp,
            Enter: in_array[i][entrance_index],
            Leave: out_array[i][entrance_index],
          });
        }

        if (slice_newest_data) {
          var reverse_data = JSON.parse(JSON.stringify(full_data)).reverse();
          new_data = reverse_data.slice(
            0,
            Math.min(SHOW_DATA_POINT_NUM, in_array.length)
          );
          new_data = JSON.parse(JSON.stringify(new_data)).reverse();
        } else {
          if (full_data.length < SHOW_DATA_POINT_NUM) {
            new_data = full_data;
          } else {
            const interval = parseInt(full_data.length / SHOW_DATA_POINT_NUM);
            for (let i = 0; i < SHOW_DATA_POINT_NUM; i++) {
              new_data.push(full_data[i * interval]);
              console.log(full_data[i * interval]);
            }
            console.log("111");
          }
        }
        console.log("full_data");
        console.log(full_data);
        console.log("new_data");
        console.log(new_data);

        setShowData(new_data);
        setFullData(full_data);
      }
    };

    const fetchVideoUrl = async (start_timestamp, end_timestamp) => {
      const url =
        server_url + "video?ts=" + parseInt(start_timestamp / 1000).toString();
      console.log("axios video url: ", url);

      let result;
      try {
        result = await axios.get(url);
      } catch (error) {
        console.log(Object.keys(error), error.message);
        //alert("no video!");
        console.log("fetch video error: no video");
      }
      console.log("video axios finish");
      console.log("video axios result: " + result);
      console.log(result);

      if (result && result.data) {
        console.log("Fetch video url: ", result.data.video);
        props.setVideoUrl(result.data.video);
        props.setVideoDuration(
          parseInt((end_timestamp - start_timestamp) / 1000)
        );
      }
    };

    let start_timestamp = getNowDate();
    let end_timestamp = getNowDate();
    if (startDate && startTime && startDate.isValid && startTime.isValid) {
      assignTime(start_timestamp, startDate, startTime);
    }
    console.log(startDate.getTime());
    console.log(startTime.getTime());
    if (endDate && endTime && endDate.isValid && endTime.isValid) {
      assignTime(end_timestamp, endDate, endTime);
    }
    console.log(endDate.getTime());
    console.log(endTime.getTime());

    console.log("starttime: ", start_timestamp);
    console.log("endtime: ", end_timestamp);

    if (updateWithTime) {
      var timeID = setInterval(() => {
        fetchData(
          start_timestamp.getTime() - time_zone_offset,
          end_timestamp.getTime() - time_zone_offset,
          true
        );
        setChartKey(chartKey + 1);
      }, REFRESH_RATE);

      return () => {
        clearInterval(timeID);
      };
    } else {
      fetchData(
        start_timestamp.getTime() - time_zone_offset,
        end_timestamp.getTime() - time_zone_offset,
        false
      );
      fetchVideoUrl(
        start_timestamp.getTime() - time_zone_offset,
        end_timestamp.getTime() - time_zone_offset
      );
    }
  }, [
    chartKey,
    updateWithTime,
    entrance_index,
    props.setVideoUrl,
    props.setVideoDuration,
  ]);

  //const chart = switchChart(chartIndex, dataStartIndex, TEST_DATA);
  const chart = switchChart(chartIndex, showData, fullData, chartKey);

  return (
    <div>
      <div>
        <Button
          variant="outlined"
          color="secondary"
          className="time-button"
          onClick={() => {
            setUpdateWithTime(false);
            setChartKey(chartKey + 1);
          }}
        >
          Start To End
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          className="time-button"
          onClick={() => {
            setEndDate(getNowDate());
            setEndTime(getNowDate());
            setUpdateWithTime(false);
            setChartKey(chartKey + 1);
          }}
        >
          Start To Now
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          className="time-button"
          onClick={() => {
            setEndDate(null);
            setEndTime(null);
            setStartDate(getNowDate());
            setStartTime(getNowDate());
            setUpdateWithTime(true);
            setChartKey(chartKey + 1);
          }}
        >
          Start From Now
        </Button>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="startDate"
              label="startDate"
              value={startDate}
              onChange={(date) => setStartDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />

            <KeyboardTimePicker
              margin="normal"
              id="startTime"
              label="startTime"
              value={startTime}
              onChange={(time) => setStartTime(time)}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="endDate"
              label="endDate"
              value={endDate}
              onChange={(date) => setEndDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />

            <KeyboardTimePicker
              margin="normal"
              id="endTime"
              label="endTime"
              value={endTime}
              onChange={(time) => setEndTime(time)}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <div className="button-group">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => setChartIndex(0)}>{CHART_TYPES[0]}</Button>
            <Button onClick={() => setChartIndex(1)}>{CHART_TYPES[1]}</Button>
            <Button onClick={() => setChartIndex(2)}>{CHART_TYPES[2]}</Button>
          </ButtonGroup>
        </div>
      </div>

      {chart}
    </div>
  );
}

Charts.propTypes = {};
