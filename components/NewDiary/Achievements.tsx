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

const Achievements = () => {
  const [currentInput, setCurrentInput] = useState<String>("");
  const [achievement, setAchievements] = useState<String[]>([""]);

  const addAchievement = () => {
    setAchievements((prev) => {
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
        label="Achievement"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button variant="contained" onClick={addAchievement}>
              Add
            </Button>
          ),
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Ahievements</Typography>
          <List>
            {achievement?.map((achievement) => (
              <ListItem key={Math.random()}>
                <ListItemAvatar>
                  <BookmarksOutlinedIcon color="success" fontSize="small" />
                </ListItemAvatar>
                <ListItemText>{achievement}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Achievements;
