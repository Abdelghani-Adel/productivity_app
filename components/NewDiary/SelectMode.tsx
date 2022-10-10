import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectMode = () => {
  const [value, setValue] = React.useState<string>("Happy");

  const onChangeHandler = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Your Mode ?</InputLabel>
      <Select
        size="small"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Your Mode ?"
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
