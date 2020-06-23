import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,ResponsiveContainer
} from 'recharts';



export default class MyBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data : this.props.data
      };
    }
  render() {

    var signed_data = JSON.parse(JSON.stringify(this.state.data));

    
    for (var i = 0; i < signed_data.length; i++) {
        if (signed_data[i]["Leave"] > 0)  {
        signed_data[i]["Leave"] = -signed_data[i]["Leave"]

        }
    }
    
    return (
        <ResponsiveContainer width="90%" height="80%">
      <BarChart
        data={signed_data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar isAnimationActive={false} dataKey="Enter" fill="#82ca9d" />
        <Bar isAnimationActive={false} dataKey="Leave" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
