import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as postServices from "../../services/apiServices";

const commentsInitialState = {
  loading: false,
  data: [],
  error: "",
};

export const getAll = createAsyncThunk("comments/getAll", () =>
  postServices.getAll("/comments")
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsInitialState,

  extraReducers: {
    [getAll.pending]: (state) => {
      state.loading = true;
    },
    [getAll.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getAll.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default commentsSlice.reducer;
