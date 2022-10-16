import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { QuoteType, sendQuote } from "../../../store/slices/quoteSlice";
import Router from "next/router";

interface UpdateFunParams {
  quote?: string;
  author?: string;
}

const NewQuote = () => {
  const dispatch = useAppDispatch();
  const [newQuote, setNewQuote] = useState<QuoteType>({
    _id: String(Math.random()),
    quote: "",
    author: "",
  });

  const updateNewQuote = (update: UpdateFunParams) => {
    setNewQuote((prev) => ({ ...prev, ...update }));
  };

  const updateQuote = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNewQuote({ quote: e.target.value });
  };
  const updateAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNewQuote({ author: e.target.value });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(sendQuote(newQuote));
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
            Add New Quote
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            className="textField"
            label="Type the quote"
            onChange={updateQuote}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            className="textField"
            label="Author"
            onChange={updateAuthor}
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

export default NewQuote;
