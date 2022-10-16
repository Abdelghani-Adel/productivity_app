import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface QuoteType {
  _id: string;
  quote: string;
  author: string;
}

export interface QuoteState {
  quotes: {
    [key: string]: QuoteType;
  };
}

const initialState: QuoteState = {
  quotes: {
    "0": {
      _id: "0",
      quote: "In the middle of every difficulty lies opportunity",
      author: "Albert Einstein",
    },
  },
};

const qutoeSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getQuotes.fulfilled, (state, { payload }) => {
      state.quotes = payload.quotes;
    });
    builder.addCase(sendQuote.fulfilled, (state, { payload }) => {
      state.quotes = payload.updatedData;
    });
  },
});

// Thunk get
export const getQuotes = createAsyncThunk("quotes/getQuotes", async () => {
  const response = await fetch("/api/quotes");
  const data = await response.json();
  return data;
});

// Thunk Send
export const sendQuote = createAsyncThunk(
  "quotes/sendQuote",
  async (quote: QuoteType) => {
    const response = await fetch("/api/new-quote", {
      method: "POST",
      body: JSON.stringify(quote),
    });

    const updatedData = await response.json();

    return updatedData;
  }
);

export const selectQuotes = (state: RootState) =>
  Object.values(state.quotes.quotes);

export const quoteActions = qutoeSlice.actions;
export default qutoeSlice;
