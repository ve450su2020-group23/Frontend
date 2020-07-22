import React, { useState, useEffect } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
//import PropTypes from 'prop-types';
import MyLine from "./SimpleLineCharts";
import MyBar from "./PositiveAndNegativeBarChart";
import MyTable from "./Table";
import axios from "axios";
import { ButtonGroup, Button } from "@material-ui/core";
import {
  CHART_TYPES,
  TEST_DATA,
  REFRESH_RATE,
  SHOW_DATA_POINT_NUM,
} from "static/constant/CONSTANT";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import "static/css/charts.css";

function switchChart(chartIndex, dataStartIndex, data) {
  var showData = [];
  for (var i = dataStartIndex; showData.length < SHOW_DATA_POINT_NUM; i++) {
    i = i % data.length;
    showData.push(data[i]);
  }

  var chart;
  var reverse_data = JSON.parse(JSON.stringify(data)).reverse();
  switch (chartIndex) {
    case 0:
      chart = <MyLine data={showData} key={dataStartIndex} />;
      break;
    case 1:
      chart = <MyBar data={showData} key={dataStartIndex} />;
      break;
    default:
      chart = <MyTable data={reverse_data} />;
  }
  return <div className="charts-container">{chart}</div>;
}

export default function Charts() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());

  const [showData, setShowData] = React.useState([]);

  const [chartIndex, setChartIndex] = useState(0);
  const [dataStartIndex, setDataStartIndex] = useState(0);
  useEffect(() => {
    var timeID = setInterval(() => {
      setDataStartIndex(dataStartIndex + 1);
    }, REFRESH_RATE);

    return () => {
      clearInterval(timeID);
    };
  });

  /*
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://hn.algolia.com/api/v1/search?query=${query}`,
      );
 
      setShowData(result.data);
    };
 
    fetchData();
  }, []);
  */

  useEffect(() => {
    const str = JSON.stringify(startDate);
    const date = Date(str);

    console.log(str);
    console.log(date);
    console.log(startDate + " |||| " + startTime);
  }, [startDate, startTime]);

  const chart = switchChart(chartIndex, dataStartIndex, TEST_DATA);
  //const chart = switchChart(chartIndex, showData);

  return (
    <div>
      <div>
        <Button
          variant="outlined"
          color="secondary"
          className="time-button"
          onClick={() => {
            setEndDate(null);
            setEndTime(null);
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
            setStartDate(new Date());
            setStartTime(new Date());
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
