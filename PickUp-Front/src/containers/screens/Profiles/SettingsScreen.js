import React from "react";
import { View, Text } from "react-native";

import useAuth from "../../../auth/useAuth";
import AppButton from "../../../components/AppButton";
import routes from "../../../config/routes";

const SettingsScreen = (props) => {
  const { logOut } = useAuth();
  return (
    <View>
      <Text>Setting screen</Text>
      <AppButton
        onPress={() => {
          logOut();
          props.navigation.navigate(routes.LOGIN_SCREEN);
        }}
        title="Se déconnecter"
      ></AppButton>
    </View>
  );
};

export default SettingsScreen;
