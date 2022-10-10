import Link from "next/link";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import DownloadDoneOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";

const AddTodoBtn = () => {
  return (
    <Link href="/todos/add">
      <Tooltip title="" placement="bottom" arrow>
        <Button variant="contained" startIcon={<DownloadDoneOutlinedIcon />}>
          Add Todo
        </Button>
      </Tooltip>
    </Link>
  );
};

export default AddTodoBtn;
