import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { RootState } from "../store";

// Declaring the type of our state
interface Diary {
  _id: string;
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
      _id: "0",
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
    addDiary: (state, action: PayloadAction<Diary>) => {
      const newKey = String(action.payload._id);
      state.diaries[newKey] = action.payload;
    },
    editDiary: (state, action: PayloadAction<Diary>) => {
      const existKey = String(action.payload._id);
      state.diaries[existKey] = action.payload;
    },
    removeDiary: (state, action: PayloadAction<string>) => {
      delete state.diaries[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDiaries.fulfilled, (state, { payload }) => {
      state.diaries = payload;
    });
  },
});

/** Thunk */
export const getDiaries = createAsyncThunk("diaries/getDiaries", async () => {
  const response = await fetch("/api/diaries");

  const data = await response.json();

  console.log(data);

  return data;
});

/** Thunk */
export const sendDiaries = createAsyncThunk("diaries/get-diaries", async () => {
  const response = await fetch("/api/new-diary");
});

/** Selectors */
export const selectDiaries = (state: RootState) => state.diaries;

export const diaryActions = diarySlice.actions;
export default diarySlice;
