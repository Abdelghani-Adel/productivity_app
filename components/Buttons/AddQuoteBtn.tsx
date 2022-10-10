import Link from "next/link";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

const AddQuoteBtn = () => {
  return (
    <Link href="/quotes/add">
      <Tooltip title="" placement="bottom" arrow>
        <Button variant="contained" startIcon={<FormatQuoteOutlinedIcon />}>
          Add Quote
        </Button>
      </Tooltip>
    </Link>
  );
};

export default AddQuoteBtn;
