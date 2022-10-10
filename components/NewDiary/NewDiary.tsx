// import Typography from "material-ui/styles/typography";
import Typography from "@mui/material/Typography";
import SelectMode from "./SelectMode";

const NewDiary = () => {
  return (
    <form>
      <Typography variant="h3" component="h3" align="center">
        Add New Form
      </Typography>
      <SelectMode />
    </form>
  );
};

export default NewDiary;
