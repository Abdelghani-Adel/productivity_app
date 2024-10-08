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
import { useAppDispatch } from "../../../store/hooks";
import { DiaryType, sendDiary } from "../../../store/slices/diarySlice";
import Router from "next/router";
import Button from "@mui/material/Button";

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

const NewDiary = () => {
  const dispatch = useAppDispatch();
  const [newDiary, setNewDiary] = useState<DiaryType>({
    _id: String(Math.random()),
    date: new Date().toLocaleString(),
    goodNews: [""],
    badNews: [""],
    wishes: [""],
    lessons: [""],
    achievements: [""],
    dayEvent: "",
    mode: "Happy",
  });

  const updateNewDiary = (update: UpdateFunParams) => {
    setNewDiary((prev) => ({ ...prev, ...update }));
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    dispatch(sendDiary(newDiary));
    Router.back();
  };

  return (
    <form onSubmit={submitHandler}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h3"
            align="center"
            color="primary"
          >
            Add New Diary
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <SelectMode updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={9}>
          <DayEvent updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={12}>
          <GoodNews updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={12}>
          <BadNews updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={12}>
          <Wishes updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={12}>
          <LearnedLessons updateDiary={updateNewDiary} />
        </Grid>

        <Grid item xs={12}>
          <Achievements updateDiary={updateNewDiary} />
        </Grid>
      </Grid>

      <Button type="submit" variant="contained">
        Add
      </Button>
    </form>
  );
};

export default NewDiary;
