import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import diarySlice from "./slices/diarySlice";

const store = configureStore({
  reducer: {
    diaries: diarySlice.reducer,
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

export default store;
