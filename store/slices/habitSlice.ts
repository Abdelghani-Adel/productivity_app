import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface HabitType {
  _id: string;
  habit: string;
  repetition: string;
}

export interface HabitState {
  habits: {
    [key: string]: HabitType;
  };
}

const initialState: HabitState = {
  habits: {
    "0": {
      _id: "0",
      habit: "Get up early",
      repetition: "daily",
    },
  },
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {},
});

// Thunk Get
export const getHabits = createAsyncThunk("habits/getHabits", async () => {
  const response = await fetch("/api/habits");
  const data = response.json();
  return data;
});

// Thunk send
export const sendHabit = createAsyncThunk(
  "/habits/addHabit",
  async (habit: HabitType) => {
    const response = await fetch("/api/new-habit", {
      method: "POST",
      body: JSON.stringify(habit),
    });

    const updatedData = await response.json();

    return updatedData;
  }
);

export const selectHabits = (state: RootState) =>
  Object.values(state.habits.habits);

export const habitActions = habitSlice.actions;
export default habitSlice;
