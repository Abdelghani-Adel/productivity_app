import Link from "next/link";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";

const AddHabitBtn = () => {
  return (
    <Link href="/habits/add">
      <Tooltip title="" placement="bottom" arrow>
        <Button
          variant="contained"
          color="warning"
          startIcon={<PublishedWithChangesOutlinedIcon />}
        >
          Add Habit
        </Button>
      </Tooltip>
    </Link>
  );
};

export default AddHabitBtn;
