import React, { Fragment, useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { props } from "./NewDiary";

const LearnedLessons: React.FC<props> = (props) => {
  const [currentInput, setCurrentInput] = useState<string>("");
  const [lessons, setLessons] = useState<string[]>([""]);

  const addLesson = () => {
    setLessons((prev) => {
      if (prev[0].length < 1) {
        return [currentInput];
      } else {
        return [...prev, currentInput];
      }
    });
    setCurrentInput("");
  };

  useEffect(() => {
    props.updateDiary({ lessons: lessons });
  }, [lessons]);

  return (
    <Fragment>
      <TextField
        variant="outlined"
        color="primary"
        className="textField"
        size="small"
        fullWidth
        id="outlined-helperText"
        label="Life lesson you've learned today !"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button
              className="textField_addBtn"
              size="small"
              variant="contained"
              onClick={addLesson}
            >
              Add
            </Button>
          ),
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Lessons You Added</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {lessons?.map((lesson) => (
                  <ListItem key={Math.random()}>
                    <BookmarksOutlinedIcon color="success" fontSize="small" />
                    <ListItemText>{lesson}</ListItemText>
                  </ListItem>
                ))}
              </AccordionDetails>
            </Accordion>
          </List>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LearnedLessons;
