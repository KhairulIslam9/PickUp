import { useContext } from "react";

import AuthContext from "./contex";
import authStorage from "./storage";

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

  return { logIn, logOut, setCustomer, customer };
};
