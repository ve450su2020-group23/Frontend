import React, { useState } from "react";
//import PropTypes from 'prop-types';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Charts from "components/Charts";
import "static/css/MultiEntrancesCharts.css";

export default function MEC() {
  const [entranceIndex, setEntranceIndex] = useState(0);

  const chart = Charts();
  return (
    <div>
      <div className="form-control-container">
        <FormControl variant="filled" className={"entrance-selection"}>
          <InputLabel id="demo-simple-select-filled-label">
            Entrance #
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={entranceIndex}
            onChange={(e) => setEntranceIndex(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>
      </div>

      {chart}
    </div>
  );
}

MEC.propTypes = {};
