import axios from "axios";
import { baseURL } from "./api";

export const getAuthUserPost = async (id) => {
  try {
    const allPosts = await axios.get(`${baseURL}/posts`);
    const postUser = await allPosts.data.filter((post) => post.userId === id);
    return postUser;
  } catch (error) {
    return error.message;
  }
};

export const getById = async (id) => {
  try {
    const { data } = await axios.get(`${baseURL}/posts/${id}`);
    return data;
  } catch (error) {
    return error.message;
  }
};
export const create = async (post) => {
  try {
    const { data } = await axios.post(`${baseURL}/posts`, post);
    return data;
  } catch (error) {
    return error.message;
  }
};
export const update = async ({ id, title, body }) => {
  try {
    const { data } = await axios.put(`${baseURL}/posts/${id}`, { title, body });
    console.log(id);
    return data;
  } catch (error) {
    return error.message;
  }
};
export const deleteById = async (id) => {
  try {
    const { data } = await axios.delete(`${baseURL}/posts/${id}`);
    return data;
  } catch (error) {
    return error.message;
  }
};
export const getCommentsByPostId = async (postId) => {
  try {
    const allComments = await axios.get(`${baseURL}/comments`);
    const postComents = await allComments.data.filter(
      (comment) => comment.postId === postId
    );
    return postComents;
  } catch (error) {
    return error.message;
  }
};

export const getUserData = async ({ username, email }) => {
  console.log("hola");
  try {
    const allUsers = await axios.get(`${baseURL}/users`);
    const user = await allUsers.data.find((user) => user.email === email);
    if (username == user.username) {
      return user;
    }
  } catch (error) {
    console.log(error);
  }
};
