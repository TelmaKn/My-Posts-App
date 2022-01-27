import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./posts/PostReducer";
import CommentReducer from "./comments/CommentReducer";
import { loadState, saveState } from "./LocalStorage";

const store = configureStore({
  reducer: {
    postsList: PostReducer,
    commentsList: CommentReducer,
  },
});

// store.subscribe(() => {
//   saveState(store.getState());
// });

export default store;
