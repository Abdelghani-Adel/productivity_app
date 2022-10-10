import Link from "next/link";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

const AddDiaryBtn = () => {
  return (
    <Link href="/diaries/add">
      <Tooltip
        title="Keep a diary and it will keep you"
        placement="bottom"
        arrow
      >
        <Button variant="contained" startIcon={<CollectionsOutlinedIcon />}>
          Add Diary
        </Button>
      </Tooltip>
    </Link>
  );
};

export default AddDiaryBtn;
