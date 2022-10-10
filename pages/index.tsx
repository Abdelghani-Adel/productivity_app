import type { NextPage } from "next";
import AddDiaryBtn from "../components/Buttons/AddDiaryBtn";
import AddHabitBtn from "../components/Buttons/AddHabitBtn";
import AddQuoteBtn from "../components/Buttons/AddQuoteBtn";
import AddTodoBtn from "../components/Buttons/AddTodoBtn";
import ButtonGroup from "@mui/material/ButtonGroup";

const Home: NextPage = () => {
  return (
    <div>
      <ButtonGroup variant="outlined">
        <AddDiaryBtn />
        <AddQuoteBtn />
        <AddTodoBtn />
        <AddHabitBtn />
      </ButtonGroup>
    </div>
  );
};

export default Home;
