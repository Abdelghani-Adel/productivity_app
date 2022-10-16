import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import diarySlice from "./slices/diarySlice";
import habitSlice from "./slices/habitSlice";
import qutoeSlice from "./slices/quoteSlice";
import todoSlice from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    diaries: diarySlice.reducer,
    quotes: qutoeSlice.reducer,
    todos: todoSlice.reducer,
    habits: habitSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch);

export default store;
