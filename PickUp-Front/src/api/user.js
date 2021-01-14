import client from "./client";

const getUser = () => client.get("/User");

const getUserByCategory = (index) => client.get("/User/Category/" + index);

const getUserAvailableAround = () => client.get("/User/Available");

export default {
  getUser,
  getUserByCategory,
  getUserAvailableAround,
};
