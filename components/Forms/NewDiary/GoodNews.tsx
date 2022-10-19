import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React, { Fragment, useEffect, useState } from "react";
import { props } from "./NewDiary";

const GoodNews: React.FC<props> = (props) => {
  const [currentInput, setCurrentInput] = useState<string>("");
  const [goodNews, setGoodNews] = useState<string[]>([""]);

  const addNews = () => {
    setGoodNews((prev) => {
      if (prev[0].length < 1) {
        return [currentInput];
      } else {
        return [...prev, currentInput];
      }
    });

    setCurrentInput("");
  };

  useEffect(() => {
    props.updateDiary({ goodNews: goodNews });
  }, [goodNews]);

  return (
    <Fragment>
      <TextField
        variant="outlined"
        color="success"
        className="textField"
        size="small"
        fullWidth
        id="outlined-helperText"
        label="Good news you've heard today !"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button
              className="textField_addBtn"
              size="small"
              variant="contained"
              color="success"
              onClick={addNews}
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
                <Typography>Good News Today</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {goodNews?.map((news) => (
                  <ListItem key={Math.random()}>
                    <BookmarksOutlinedIcon color="success" fontSize="small" />
                    <ListItemText>{news}</ListItemText>
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

export default GoodNews;
