import axios from "axios";
import { baseURL } from "./api";

export const getAll = async (props) => {
  try {
    const { data } = await axios.get(`${baseURL}${props}`);
    console.log(props);
    return data;
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
