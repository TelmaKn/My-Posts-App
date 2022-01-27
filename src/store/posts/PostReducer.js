import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as postServices from "../../services/apiServices";

const postsInitialState = {
  loading: false,
  data: [],
  error: "",
  currentPost: {
    userId: "",
    id: "",
    title: "",
    body: "",
  },
};

export const getAll = createAsyncThunk("post/getAll", () =>
  postServices.getAll("/posts")
);

export const getById = createAsyncThunk("post/getById", postServices.getById);

export const create = createAsyncThunk("post/create", postServices.create);

export const update = createAsyncThunk("post/update", postServices.update);

export const deletebyId = createAsyncThunk(
  "post/delete",
  postServices.deleteById
);

const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {
    cleanCurrentState: (state) => {
      state.currentPost = {
        userId: "",
        id: "",
        title: "",
        body: "",
      };
    },
  },
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

    [getById.pending]: (state) => {
      state.loading = true;
    },
    [getById.fulfilled]: (state, action) => {
      state.currentposts = action.payload;
      state.loading = false;
    },
    [getById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    [create.pending]: (state) => {
      state.loading = true;
    },
    [create.fulfilled]: (state, action) => {
      state.data = [...state.data, action.payload];
      state.loading = false;
    },
    [create.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    [update.pending]: (state) => {
      state.loading = true;
    },
    [update.fulfilled]: (state, action) => {
      console.log(action.payload);
      const postForUpdate = state.data.findIndex(
        (e) => e.id == action.payload.id
      );
      state.data[postForUpdate] = action.payload;
    },
    [update.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    [deletebyId.pending]: (state) => {
      state.loading = true;
    },
    [deletebyId.fulfilled]: (state, action) => {
      state.data = state.data.filter((posts) => posts.id != action.meta.arg);
      state.loading = false;
    },
    [deletebyId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});
export const { cleanCurrentState } = postsSlice.actions;
export default postsSlice.reducer;
