import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    const token = JSON.stringify(authToken);
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.log("Error store Token", error);
  }
};

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync(key);
    return JSON.parse(token);
  } catch (error) {
    console.log("Error get Token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

const getCustomer = async () => {
  const customer = await getToken();
  return customer ? customer : null;
};

export default {
  getToken,
  getCustomer,
  removeToken,
  storeToken,
};
