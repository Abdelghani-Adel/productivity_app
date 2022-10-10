import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const options = ["Happy", "Sad", "Normal", "Excited", "Afraid"];

const SelectMode = () => {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const autoCompleteChangeHandler = (event: any, newValue: string | null) => {
    setValue(newValue);
  };

  const inputChangeHandler = (event: any, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  // console.log(inputValue);

  return (
    <Autocomplete
      fullWidth
      value={value}
      // onChange={autoCompleteChangeHandler}
      inputValue={inputValue}
      onInputChange={inputChangeHandler}
      size="small"
      id="combo-box-demo"
      options={options}
      sx={{ width: 300, marginBottom: 5 }}
      renderInput={(params) => <TextField {...params} label="Your Mode" />}
    />
  );
};

export default SelectMode;
