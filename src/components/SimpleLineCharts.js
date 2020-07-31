import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  Text,
  tspan,
} from "recharts";

export default function MyLine(props) {
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
      tickCount={5}
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
      <LineChart
        data={props.data}
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
        <Line
          type="monotone"
          isAnimationActive={false}
          dataKey="Enter"
          stroke="#FF0000"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          isAnimationActive={false}
          dataKey="Leave"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

MyLine.propTypes = {
  props: PropTypes.object,
};
