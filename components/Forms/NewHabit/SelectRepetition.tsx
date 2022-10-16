import React, { useEffect } from "react";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface props {
  updateRepetition: (update: { repetition: string }) => void;
}

const SelectRepetition: React.FC<props> = (props) => {
  const [value, setValue] = React.useState<string>("Daily");

  const onChangeHandler = (event: any) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    props.updateRepetition({ repetition: value });
  }, [value]);

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
        <MenuItem value="Daily">Daily</MenuItem>
        <MenuItem value="Weekly">Weekly</MenuItem>
        <MenuItem value="Monthly">Monthly</MenuItem>
        <MenuItem value="Yearly">Yearly</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectRepetition;
