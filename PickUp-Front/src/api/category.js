import client from "./client";

const getCategory = () => client.get("/Category");

export default { getCategory };
