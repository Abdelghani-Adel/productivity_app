import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface TodoType {
  _id: string;
  task: string;
  deadline: string;
}

export interface TodoState {
  todos: {
    [key: string]: TodoType;
  };
}

const initialState: TodoState = {
  todos: {
    "0": {
      _id: "0",
      task: "Finish coding the home page",
      deadline: "10/17/2022",
    },
  },
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(sendTodo.fulfilled, (state, { payload }) => {
      state.todos = payload.updatedData;
    });
    builder.addCase(getTodos.fulfilled, (state, { payload }) => {
      state.todos = payload.todos;
    });
  },
});

// Thunk Get
export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await fetch("/api/todos");
  const data = await response.json();
  return data;
});

export const sendTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo: TodoType) => {
    const response = await fetch("/api/new-tood", {
      method: "POST",
      body: JSON.stringify(todo),
    });

    const updatedData = await response.json();
    return updatedData;
  }
);

export const selectTodos = (state: RootState) =>
  Object.values(state.todos.todos);

export const todoActions = todoSlice.actions;
export default todoSlice;
