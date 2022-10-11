import Link from "next/link";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";

const AddQuoteBtn = () => {
  return (
    <Link href="/quotes/add">
      <Tooltip title="" placement="bottom" arrow>
        <Button
          variant="contained"
          color="error"
          startIcon={<SaveAsOutlinedIcon />}
        >
          Add Quote
        </Button>
      </Tooltip>
    </Link>
  );
};

export default AddQuoteBtn;
