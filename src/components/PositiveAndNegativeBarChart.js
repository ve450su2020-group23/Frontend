import React from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Label,
} from "recharts";

export default function MyBar(props) {
  var signed_data = JSON.parse(JSON.stringify(props.data));

  for (var i = 0; i < signed_data.length; i++) {
    if (signed_data[i]["Leave"] > 0) {
      signed_data[i]["Leave"] = -signed_data[i]["Leave"];
    }
  }

  let xAxis = (
    <XAxis
      dataKey="Timestamp"
      height={20}
      xAxisId={0}
      interval={0}
      tickCount={5}
    ></XAxis>
  );

  let xAxis2 = (
    <XAxis
      dataKey="Date"
      height={50}
      xAxisId={1}
      axisLine={false}
      tickLine={false}
    >
      <Label value="Timestamp" offset={0}></Label>
    </XAxis>
  );
  if (window.screen.width < 1400) {
    xAxis = (
      <XAxis dataKey="Timestamp" height={20} xAxisId={0} tickCount={5}></XAxis>
    );

    xAxis2 = (
      <XAxis
        dataKey="Date"
        height={50}
        xAxisId={1}
        axisLine={false}
        tickLine={false}
        tickCount={5}
      >
        <Label value="Timestamp" offset={0}></Label>
      </XAxis>
    );
  }

  return (
    <ResponsiveContainer width="90%" height="80%">
      <BarChart
        data={signed_data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        {xAxis}
        {xAxis2}

        <YAxis>
          <Label
            value="Number of People"
            angle={-90}
            offset={0}
            position="insideLeft"
          />
        </YAxis>
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar isAnimationActive={false} dataKey="Enter" fill="#FF0000" />
        <Bar isAnimationActive={false} dataKey="Leave" fill="#000000" />
      </BarChart>
    </ResponsiveContainer>
  );
}

MyBar.propTypes = {
  props: PropTypes.object,
};
