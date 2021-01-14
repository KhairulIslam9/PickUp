import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserProfileScreen from "../screens/User/UserProfileScreen";
import UserScreen from "../screens/User/UserScreen";
import routes from "../../config/routes";

const Stack = createStackNavigator();

const ProStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routes.USER_SCREEN}>
      <Stack.Screen
        name={routes.USER_SCREEN}
        component={UserScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.USER_PROFILE_SCREEN}
        component={UserProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProStackNavigator;
