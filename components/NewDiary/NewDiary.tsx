import { useState } from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import SelectMode from "./SelectMode";
import LearnedLessons from "./LearnedLessons";
import Achievements from "./Achievements";
import Wishes from "./Wishes";
import GoodNews from "./GoodNews";
import BadNews from "./BadNews";
import DayEvent from "./DayEvent";

export interface props {
  updateDiary: (update: UpdateFunParams) => void;
}

interface UpdateFunParams {
  goodNews?: string[];
  badNews?: string[];
  wishes?: string[];
  lessons?: string[];
  achievements?: string[];
  dayEvent?: string;
  mode?: string;
}

interface NewDiary {
  date: string;
  goodNews?: string[];
  badNews?: string[];
  wishes?: string[];
  lessons?: string[];
  achievements?: string[];
  dayEvent?: string;
  mode: string;
}

const NewDiary = () => {
  const [newDiary, setNewDiary] = useState<NewDiary>({
    date: new Date().toLocaleString(),
    mode: "Happy",
  });

  console.log(newDiary);

  const updateNewDiary = (update: UpdateFunParams) => {
    setNewDiary((prev) => ({ ...prev, ...update }));
  };

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3" align="center">
            Add New Form
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <GoodNews updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={4}>
          <BadNews updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={4}>
          <Wishes updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={6}>
          <LearnedLessons updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={6}>
          <Achievements updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={3}>
          <DayEvent updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={3}>
          <SelectMode updateDiary={updateNewDiary} />
        </Grid>
      </Grid>
    </form>
  );
};

export default NewDiary;
