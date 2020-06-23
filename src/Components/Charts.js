import React from 'react'
import MyLine from './SimpleLineCharts'
import MyBar from './PositiveAndNegativeBarChart'
import { ButtonGroup, Button } from '@material-ui/core';
// import {CHARTYPES} from 'static/constant/CONSTANT'
import {CHART_TYPES, TEST_DATA} from 'static/constant/CONSTANT'

import 'static/css/charts.css'


const data = TEST_DATA

const show_data_point_num = 7


export default class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartIndex : 0,
      show_data_index : 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      var show_data_index = this.state.show_data_index + 1;
      this.setState({
        show_data_index,
      })
      console.log(this.state.show_data_index);
      
    }, 2000);
  }

  buttonClick(id) {
    this.setState({
      chartIndex: id
    })
  }


  render() {

    var {chartIndex, show_data_index, rerender} = this.state

    var show_data = []


    for (var i = show_data_index; show_data.length < 7; i++) {
      i =  i % data.length;
      show_data.push(data[i])
    }
    console.log(show_data)

    var chart;
    if (chartIndex == 0) {
      chart = < MyLine data={show_data} key={show_data_index} />
    }
    else if (chartIndex == 1) {
      chart = < MyBar data={show_data} key={show_data_index} />
    }
    else {
      chart = <div></div>
    }

    return (
      <div>
        <div className="button-group">
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button onClick={() => this.buttonClick(0)}>{CHART_TYPES[0]}</Button>
            <Button onClick={() => this.buttonClick(1)}>{CHART_TYPES[1]}</Button>
            <Button onClick={() => this.buttonClick(2)}>{CHART_TYPES[2]}</Button>
          </ButtonGroup>
        </div>

        <div className="charts-container">
          {chart}
        </div>
      </div>
    )

  }
}




