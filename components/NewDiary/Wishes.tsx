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

const Wishes = () => {
  const [currentInput, setCurrentInput] = useState<String>("");
  const [wishes, setWishes] = useState<String[]>([""]);

  const addWish = () => {
    setWishes((prev) => {
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
        label="Wish"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button variant="contained" onClick={addWish}>
              Add
            </Button>
          ),
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Wishes</Typography>
          <List>
            {wishes?.map((wishes) => (
              <ListItem key={Math.random()}>
                <ListItemAvatar>
                  <BookmarksOutlinedIcon color="success" fontSize="small" />
                </ListItemAvatar>
                <ListItemText>{wishes}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Wishes;
