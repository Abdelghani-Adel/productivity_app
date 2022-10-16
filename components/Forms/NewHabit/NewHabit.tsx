import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { QuoteType, sendQuote } from "../../../store/slices/quoteSlice";
import Router from "next/router";
import { HabitType, sendHabit } from "../../../store/slices/habitSlice";
import SelectRepetition from "./SelectRepetition";

interface UpdateFunParams {
  habit?: string;
  repetition?: string;
}

const NewHabit = () => {
  const dispatch = useAppDispatch();
  const [newHabit, setNewHabit] = useState<HabitType>({
    _id: String(Math.random()),
    habit: "",
    repetition: "",
  });

  const updateNewHabit = (update: UpdateFunParams) => {
    setNewHabit((prev) => ({ ...prev, ...update }));
  };

  const updateHabit = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNewHabit({ habit: e.target.value });
  };
  const updateRepetition = (update: UpdateFunParams) => {
    updateNewHabit(update);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(sendHabit(newHabit));
    Router.back();
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%)",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h3"
            align="center"
            color="primary"
          >
            Add New Habit
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            className="textField"
            label="Type the new habit"
            onChange={updateHabit}
          />
        </Grid>

        <Grid item xs={3}>
          <SelectRepetition updateRepetition={updateRepetition} />
        </Grid>

        <Grid item xs={1}>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewHabit;
