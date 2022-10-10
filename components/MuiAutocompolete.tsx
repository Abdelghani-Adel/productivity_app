import React, { ReactEventHandler } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const MuiAutocomplete = () => {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const onChangeHandler = (e: ReactEventHandler) => {};

  return (
    <Autocomplete
      multiple={true}
      size="small"
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};

export default MuiAutocomplete;
