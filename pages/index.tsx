import Stack from "@mui/material/Stack";
import type { NextPage } from "next";
import { useEffect } from "react";
import AddDiaryBtn from "../components/Buttons/AddDiaryBtn";
import AddHabitBtn from "../components/Buttons/AddHabitBtn";
import AddQuoteBtn from "../components/Buttons/AddQuoteBtn";
import AddTodoBtn from "../components/Buttons/AddTodoBtn";
import { useAppDispatch } from "../store/hooks";
import { getDiaries } from "../store/slices/diarySlice";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDiaries());
  }, []);

  return (
    <div>
      <Stack justifyContent="center" direction={"row"} spacing={4}>
        <AddDiaryBtn />
        <AddQuoteBtn />
        <AddTodoBtn />
        <AddHabitBtn />
      </Stack>
    </div>
  );
};

export default Home;
