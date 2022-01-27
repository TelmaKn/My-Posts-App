import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as apiServices from "../../services/apiServices";

const commentsInitialState = {
  loading: false,
  data: [],
  error: "",
};

export const getPostComments = createAsyncThunk(
  "comments/getPostComments",
  apiServices.getCommentsByPostId
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsInitialState,

  extraReducers: {
    [getPostComments.pending]: (state) => {
      state.loading = true;
    },
    [getPostComments.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getPostComments.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default commentsSlice.reducer;
