import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./posts/PostReducer";
import CommentReducer from "./comments/CommentReducer";
import userReducer from "./user/userReducer";

const store = configureStore({
  reducer: {
    postsList: PostReducer,
    commentsList: CommentReducer,
    user: userReducer,
  },
});

export default store;
