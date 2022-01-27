import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./posts/PostReducer";
import CommentReducer from "./comments/CommentReducer";
import userReducer from "./user/userReducer";
import { loadState, saveState } from "./LocalStorage";

const store = configureStore({
  reducer: {
    postsList: PostReducer,
    commentsList: CommentReducer,
    user: userReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
