import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Fab } from '@material-ui/core';



export default class MyLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : this.props.data
    };
  }

  render() {
    return (
      <ResponsiveContainer width="90%" height="80%">

      <LineChart
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" isAnimationActive={false} dataKey="Enter" stroke="#82ca9d"  />
        <Line type="monotone" isAnimationActive={false} dataKey="Leave" stroke="#8884d8" activeDot={{ r: 8 }} />
        
      </LineChart>
      </ResponsiveContainer>

    );
  }
}
