import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { get } from "https";
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
    builder.addCase(sendDiary.fulfilled, (state, { payload }) => {
      state.diaries = payload.updatedData;
    });
  },
});

/** Thunk Get */
// export const getDiaries = createAsyncThunk("diaries/getDiaries", async () => {
//   const response = await fetch("/api/diaries");
//   const data = await response.json();
//   return data;
// });

/** Thunk Send */
export const sendDiary = createAsyncThunk(
  "diaries/addDiary",
  async (diary: Diary) => {
    /** Sending the diary to the API */
    const response = await fetch("/api/new-diary", {
      method: "POST",
      body: JSON.stringify(diary),
    });

    /** Getting the updated data from the API - I've configured this in 'pages/api/new-diary.ts' */
    const updatedData = await response.json();

    /** Returning the update to be used into the builder reducer */
    return updatedData;
  }
);

/** Selectors */
export const selectDiaries = (state: RootState) => state.diaries;

export const diaryActions = diarySlice.actions;
export default diarySlice;
