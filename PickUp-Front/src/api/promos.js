import client from "./client";

const getPromos = (index) => client.get("/Event");

export default {
  getPromos,
};
