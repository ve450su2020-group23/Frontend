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
  if (window.screen.width < 520) {
    xAxis = (
      <XAxis dataKey="Timestamp" height={20} xAxisId={0} tickCount={5}></XAxis>
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

        <XAxis
          dataKey="Date"
          height={50}
          xAxisId={1}
          axisLine={false}
          tickLine={false}
        >
          <Label value="Timestamp" offset={0}></Label>
        </XAxis>

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
        <Bar isAnimationActive={false} dataKey="Enter" fill="#82ca9d" />
        <Bar isAnimationActive={false} dataKey="Leave" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

MyBar.propTypes = {
  props: PropTypes.object,
};
