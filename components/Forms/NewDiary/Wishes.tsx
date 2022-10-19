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

const Wishes: React.FC<props> = (props) => {
  const [currentInput, setCurrentInput] = useState<string>("");
  const [wishes, setWishes] = useState<string[]>([""]);

  const addWish = () => {
    setWishes((prev) => {
      if (prev[0].length < 1) {
        return [currentInput];
      } else {
        return [...prev, currentInput];
      }
    });
    setCurrentInput("");
  };

  useEffect(() => {
    props.updateDiary({ wishes: wishes });
  }, [wishes]);

  return (
    <Fragment>
      <TextField
        variant="outlined"
        color="primary"
        className="textField"
        size="small"
        fullWidth
        id="outlined-helperText"
        label="New wish for the future !"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button
              className="textField_addBtn"
              size="small"
              variant="contained"
              onClick={addWish}
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
                <Typography>Added Wishes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {wishes?.map((wish) => (
                  <ListItem key={Math.random()}>
                    <BookmarksOutlinedIcon color="success" fontSize="small" />
                    <ListItemText>{wish}</ListItemText>
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

export default Wishes;
