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
} from "recharts";

export default function MyLine(props) {
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
        <XAxis dataKey="Timestamp">
          <Label value="Timestamp" offset={0} position="insideBottom" />
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
        <Line
          type="monotone"
          isAnimationActive={false}
          dataKey="Enter"
          stroke="#82ca9d"
        />
        <Line
          type="monotone"
          isAnimationActive={false}
          dataKey="Leave"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

MyLine.propTypes = {
  props: PropTypes.object,
};
