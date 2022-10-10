import { TextField } from "@mui/material";
import { props } from "./NewDiary";

const DayEvent: React.FC<props> = (props) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    props.updateDiary({ dayEvent: e.target.value });
  };
  return (
    <TextField
      fullWidth
      variant="outlined"
      color="primary"
      focused
      label="Most important event"
      size="small"
      onBlur={onBlurHandler}
    />
  );
};

export default DayEvent;
