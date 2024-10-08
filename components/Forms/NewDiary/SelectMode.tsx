import React from "react";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { props } from "./NewDiary";

const SelectMode: React.FC<props> = (props) => {
  const [value, setValue] = React.useState<string>("Happy");

  const onChangeHandler = (event: any) => {
    setValue(event.target.value);
    props.updateDiary({ mode: event.target.value });
  };

  return (
    <FormControl fullWidth>
      <Select
        size="small"
        className="textField"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={onChangeHandler}
      >
        <MenuItem value="Happy">Happy</MenuItem>
        <MenuItem value="Sad">Sad</MenuItem>
        <MenuItem value="Normal">Normal</MenuItem>
        <MenuItem value="Excited">Excited</MenuItem>
        <MenuItem value="Afraid">Afraid</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectMode;
