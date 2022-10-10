import type { NextPage } from "next";
import Head from "next/head";
import AddDiaryBtn from "../components/Buttons/AddDiaryBtn";
import AddHabitBtn from "../components/Buttons/AddHabitBtn";
import AddQuoteBtn from "../components/Buttons/AddQuoteBtn";
import AddTodoBtn from "../components/Buttons/AddTodoBtn";
import styles from "../styles/Home.module.css";
import ButtonGroup from "@mui/material/ButtonGroup";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
