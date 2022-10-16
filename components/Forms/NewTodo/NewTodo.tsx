import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { QuoteType, sendQuote } from "../../../store/slices/quoteSlice";
import Router from "next/router";
import { sendTodo, TodoType } from "../../../store/slices/todoSlice";
import DeadLine from "./Deadline";

interface UpdateFunParams {
  todo?: string;
  deadline?: string;
}

const NewTodo = () => {
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = useState<TodoType>({
    _id: String(Math.random()),
    todo: "",
    deadline: "",
  });

  const updateNewTodo = (update: UpdateFunParams) => {
    setNewTodo((prev) => ({ ...prev, ...update }));
  };
  const updateTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNewTodo({ todo: e.target.value });
  };
  const updateDeadLine = (update: UpdateFunParams) => {
    updateNewTodo(update);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(sendTodo(newTodo));
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
            Add New Todo
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <DeadLine updateDeadLine={updateDeadLine} />
        </Grid>

        <Grid item xs={8}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            className="textField"
            label="Todo"
            onChange={updateTodo}
          />
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

export default NewTodo;
