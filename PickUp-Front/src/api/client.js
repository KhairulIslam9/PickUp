import { create } from "apisauce";

import authStorage from "../auth/secureStorage";
// import cache from "../utility/cache";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
});

// apiClient.addAsyncRequestTransform(async (request) => {
//   const authtoken = await authStorage.getToken();
//   if (!authtoken) return;
//   // x-auth-token pour KEY ca base de donner (header)
//   request.headers["x-auth-token"] = authtoken;
// });

// // Cache
// const get = apiClient.get;
// apiClient.get = async (url, params, axiosConfig) => {
//   const responce = await get(url, params, axiosConfig);

//   if (responce.ok) {
//     cache.store(url, responce.data);
//     return responce;
//   }

//   const data = await cache.get(url);
//   return data ? { ok: true, data } : responce;
// };

export default apiClient;
