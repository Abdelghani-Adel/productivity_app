import { TextField } from "@mui/material";

const DayEvent = () => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      color="primary"
      focused
      label="Most important event"
      size="small"
    />
  );
};

export default DayEvent;
