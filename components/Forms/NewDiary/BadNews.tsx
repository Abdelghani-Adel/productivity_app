import React, { Fragment, useState, useEffect } from "react";
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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { props } from "./NewDiary";

const BadNews: React.FC<props> = (props) => {
  const [currentInput, setCurrentInput] = useState<string>("");
  const [badNews, setBadNews] = useState<string[]>([""]);

  const addNews = () => {
    setBadNews((prev) => {
      if (prev[0].length < 1) {
        return [currentInput];
      } else {
        return [...prev, currentInput];
      }
    });
    setCurrentInput("");
  };

  useEffect(() => {
    props.updateDiary({ badNews: badNews });
  }, [badNews]);

  return (
    <Fragment>
      <TextField
        variant="outlined"
        color="error"
        focused
        className="textField"
        size="small"
        fullWidth
        id="outlined-helperText"
        label="Bad news you've heard today !"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button
              color="error"
              className="textField_addBtn"
              size="small"
              variant="contained"
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
                <Typography>Bad News Today</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {badNews?.map((news) => (
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

export default BadNews;
