import Link from "next/link";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

const AddHabitBtn = () => {
  return (
    <Link href="/habits/add">
      <Tooltip title="" placement="bottom" arrow>
        <Button variant="contained" startIcon={<FormatQuoteOutlinedIcon />}>
          Add Habit
        </Button>
      </Tooltip>
    </Link>
  );
};

export default AddHabitBtn;
