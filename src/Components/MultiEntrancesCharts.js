import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import MyLine from "components/SimpleLineCharts";
import MyBar from "components/PositiveAndNegativeBarChart";
import MyTable from "components/Table";
import { ButtonGroup, Button } from "@material-ui/core";

// import {CHARTYPES} from 'static/constant/CONSTANT'
import { CHART_TYPES, TEST_DATA } from "static/constant/CONSTANT";

import "static/css/MultiEntrancesCharts.css";

import { REFRESH_RATE } from "static/constant/CONSTANT.js";

const data = TEST_DATA;

const show_data_point_num = 7;

export default class MEC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartIndex: 0,
      show_data_index: 0,
      age: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  componentDidMount() {
    setInterval(() => {
      var show_data_index = this.state.show_data_index + 1;
      this.setState({
        show_data_index,
      });
    }, REFRESH_RATE);
  }

  buttonClick(id) {
    this.setState({
      chartIndex: id,
    });
  }

  render() {
    var { chartIndex, show_data_index, rerender } = this.state;

    var show_data = [];

    for (var i = show_data_index; show_data.length < 7; i++) {
      i = i % data.length;
      show_data.push(data[i]);
    }

    var chart;
    if (chartIndex == 0) {
      chart = <MyLine data={show_data} key={show_data_index} />;
    } else if (chartIndex == 1) {
      chart = <MyBar data={show_data} key={show_data_index} />;
    } else {
      //chart = < MyTable data={data} key={show_data_index}/>
      var reverse_data = JSON.parse(JSON.stringify(data.reverse()));
      chart = <MyTable data={reverse_data} />;
    }

    return (
      <div>
        <FormControl variant="filled" className={"entrance-selection"}>
          <InputLabel id="demo-simple-select-filled-label">
            Entrance #
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={this.state.age}
            onChange={(e) => this.handleChange(e)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>

        <div className="button-group">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => this.buttonClick(0)}>
              {CHART_TYPES[0]}
            </Button>
            <Button onClick={() => this.buttonClick(1)}>
              {CHART_TYPES[1]}
            </Button>
            <Button onClick={() => this.buttonClick(2)}>
              {CHART_TYPES[2]}
            </Button>
          </ButtonGroup>
        </div>

        <div className="charts-container">{chart}</div>
      </div>
    );
  }
}
