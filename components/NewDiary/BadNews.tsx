import React, { Fragment, useState, useRef } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";

const BadNews = () => {
  const [currentInput, setCurrentInput] = useState<String>("");
  const [badNews, setBadNews] = useState<String[]>([""]);

  const addNews = () => {
    setBadNews((prev) => {
      if (prev.length < 2) {
        return [currentInput];
      } else {
        return [...prev, currentInput];
      }
    });
    setCurrentInput("");
  };

  return (
    <Fragment>
      <TextField
        fullWidth
        id="outlined-helperText"
        label="Bad News"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button variant="contained" onClick={addNews}>
              Add
            </Button>
          ),
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Bad News</Typography>
          <List>
            {badNews?.map((news) => (
              <ListItem key={Math.random()}>
                <ListItemAvatar>
                  <BookmarksOutlinedIcon color="success" fontSize="small" />
                </ListItemAvatar>
                <ListItemText>{news}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default BadNews;
