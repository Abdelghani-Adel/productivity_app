import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Declaring the type of our state
interface Diary {
  id: string;
  date: string;
  mode: string;
  wishes: string[];
  achievements: string[];
  badNews: string[];
  goodNews: string[];
  dayEvent: string;
  lessons: string[];
}
export interface DiaryState {
  diaries: {
    [key: string]: Diary;
  };
}

const initialState: DiaryState = {
  diaries: {
    "0": {
      id: "0",
      date: "10/10/2022",
      mode: "Excited",
      wishes: ["Become a frontend developer"],
      achievements: ["Building the productivity application"],
      badNews: [""],
      goodNews: [""],
      dayEvent: "",
      lessons: [""],
    },
  },
};

const diarySlice = createSlice({
  name: "diaries",
  initialState: initialState,
  reducers: {
    addDiary: (state, action) => {
      // Add your logic here
    },
    editDiary: (state, action) => {
      // Add your logic here
    },
    removeDiary: (state, action) => {
      // Add your logic here
    },
  },
});

/** Selectors */
export const selectDiaries = (state: RootState) => state.diaries;

export const diaryActions = diarySlice.actions;
export default diarySlice;
