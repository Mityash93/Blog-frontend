import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../../axios";

export const fetchPosts = createAsyncThunk("user/fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  return data;
});
export const fetchTags = createAsyncThunk("posts/fetchTags", async () => {
  const { data } = await axios.get("/tags");
  return data;
});
export const fetchRemovePost = createAsyncThunk(
  "posts/fetchRemovePost",
  async (id) => {
    return await axios.delete(`/posts/${id}`);
  }
);
