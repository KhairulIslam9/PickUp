import client from "./client";

const login = (email, password) =>
  client.post("/Customer/Login", { email, password });

export default { login };
