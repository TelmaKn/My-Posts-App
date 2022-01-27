import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData } from "../../services/apiServices";

const userInitialState = {
  loading: false,
  data: [],
  error: "",
};

export const getUser = createAsyncThunk("post/getUserData", getUserData);

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  extraReducers: {
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default userSlice.reducer;
