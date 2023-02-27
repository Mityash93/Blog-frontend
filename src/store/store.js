import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/Posts/posts";
import auth from "./slices/Auth/auth";

export const store = configureStore({
  reducer: {
    posts,
    auth,
  },
});
