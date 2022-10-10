import Link from "next/link";
import Button from "@mui/material/Button";

const Diaries = () => {
  return (
    <div>
      <h2>Diaries</h2>

      <Button variant="contained">
        <Link href="/diaries/add">Add Diary</Link>
      </Button>
    </div>
  );
};

export default Diaries;
