import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import AuthContext from "./src/auth/contex";
import HomeNavigator from "./src/containers/navigators/HomeNavigator";
import configureStore from "./src/store/configureStore";
import authStorage from "./src/auth/secureStorage";
import OfflineNotice from "./src/components/OfflineNotice";

export default function App() {
  const [customer, setCustomer] = useState();

  const restoreCustomer = async () => {
    const customer = await authStorage.getCustomer();
    if (customer) setCustomer(customer);
  };
  // A remplacer par un loading
  useEffect(() => {
    restoreCustomer();
  }, []);

  return (
    <>
      <OfflineNotice />
      <AuthContext.Provider value={{ customer, setCustomer }}>
        <Provider store={configureStore}>
          <NavigationContainer>
            <HomeNavigator />
          </NavigationContainer>
        </Provider>
      </AuthContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
