import React, { useState, useEffect } from "react";
//import PropTypes from 'prop-types';
import MyLine from "./SimpleLineCharts";
import MyBar from "./PositiveAndNegativeBarChart";
import MyTable from "./Table";
import { ButtonGroup, Button } from "@material-ui/core";
import {
  CHART_TYPES,
  TEST_DATA,
  REFRESH_RATE,
  SHOW_DATA_POINT_NUM,
} from "static/constant/CONSTANT";
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

  const chart = switchChart(chartIndex, dataStartIndex, TEST_DATA);

  return (
    <div>
      <div className="button-group">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => setChartIndex(0)}>{CHART_TYPES[0]}</Button>
          <Button onClick={() => setChartIndex(1)}>{CHART_TYPES[1]}</Button>
          <Button onClick={() => setChartIndex(2)}>{CHART_TYPES[2]}</Button>
        </ButtonGroup>
      </div>

      {chart}
    </div>
  );
}

Charts.propTypes = {};
