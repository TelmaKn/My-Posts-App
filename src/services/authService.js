import axios from "axios";
import { baseURL } from "./api";

export const userExist = async (username, email) => {
  try {
    const allUsers = await axios.get(`${baseURL}/users`);
    const user = await allUsers.data.find((user) => user.email === email);
    if (user.username === username) return true;
    else return false;
  } catch (error) {
    console.log(error);
  }
};
