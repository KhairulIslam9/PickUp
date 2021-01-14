import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ReservationScreen from "../screens/Profiles/ReservationScreen";
import SettingsScreen from "../screens/Profiles/SettingsScreen";
import HomeScreen from "../screens/HomeScreen";
import UserProfileScreen from "../screens/User/UserProfileScreen";
import CustomDrawerContent from "./CustomDrawerContent";
import colors from "../../config/colors";
import routes from "../../config/routes";
import ProfileScreen from "../screens/Profiles/ProfileScreen";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={routes.HOME_SCREEN}
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primary },
      }}
      drawerContentOptions={{ activeBackgroundColor: "red" }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      <Drawer.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
      <Drawer.Screen name={routes.REGISTER_SCREEN} component={RegisterScreen} />
      <Drawer.Screen name={routes.PROFILE_SCREEN} component={ProfileScreen} />
      <Drawer.Screen
        name={routes.RESERVATION_SCREEN}
        component={ReservationScreen}
      />
      <Drawer.Screen name={routes.SETTINGS_SCREEN} component={SettingsScreen} />
      <Drawer.Screen
        name={routes.USER_PROFILE_SCREEN_2}
        component={UserProfileScreen}
        options={{ headerShown: false }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
