import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import SelectMode from "./SelectMode";
import LearnedLessons from "./LearnedLessons";
import Achievements from "./Achievements";
import Wishes from "./Wishes";
import GoodNews from "./GoodNews";
import BadNews from "./BadNews";
import DayEvent from "./DayEvent";

const NewDiary = () => {
  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3" align="center">
            Add New Form
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <GoodNews />
        </Grid>

        <Grid item xs={4}>
          <BadNews />
        </Grid>

        <Grid item xs={4}>
          <Wishes />
        </Grid>

        <Grid item xs={6}>
          <LearnedLessons />
        </Grid>

        <Grid item xs={6}>
          <Achievements />
        </Grid>

        <Grid item xs={3}>
          <DayEvent />
        </Grid>

        <Grid item xs={3}>
          <SelectMode />
        </Grid>
      </Grid>
    </form>
  );
};

export default NewDiary;
