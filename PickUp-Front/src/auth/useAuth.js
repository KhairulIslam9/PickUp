import { useContext } from "react";

import AuthContext from "./contex";
import authStorage from "./secureStorage";

export default useAuth = () => {
  const { customer, setCustomer } = useContext(AuthContext);

  const logIn = (authToken) => {
    const customer = authToken;
    setCustomer(customer);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setCustomer(null);
    authStorage.removeToken();
  };

  const update = (authToken) => {
    authStorage.storeToken(authToken);
  };
  return { logIn, logOut, update, setCustomer, customer };
};
