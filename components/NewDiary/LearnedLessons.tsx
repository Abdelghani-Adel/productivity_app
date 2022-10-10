import React, { Fragment, useState, useRef } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";

const dummyLessons = ["Family always comes first", "Do not wasting time"];

const LearnedLessons = () => {
  const [currentInput, setCurrentInput] = useState<String>("");
  const [lessons, setLessons] = useState<String[]>(dummyLessons);

  const addLesson = () => {
    setLessons((prev) => [...prev, currentInput]);
    setCurrentInput("");
  };

  return (
    <Fragment>
      <TextField
        fullWidth
        id="outlined-helperText"
        label="Learned Lesson "
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button variant="contained" onClick={addLesson}>
              Add
            </Button>
          ),
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Added Lessons</Typography>
          <List>
            {lessons?.map((lesson) => (
              <ListItem key={Math.random()}>
                <ListItemAvatar>
                  <BookmarksOutlinedIcon color="success" fontSize="small" />
                </ListItemAvatar>
                <ListItemText>{lesson}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LearnedLessons;
