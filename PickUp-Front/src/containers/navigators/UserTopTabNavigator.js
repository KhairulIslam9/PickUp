import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MapScreen from "../screens/Map/MapScreen";
import UserStackNavigator from "./UserStackNavigation";
import Constants from "expo-constants";
import routes from "../../config/routes";

const TopTab = createMaterialTopTabNavigator();

const ProTopTabNavigator = () => {
  return (
    <TopTab.Navigator
      style={{ marginTop: Constants.statusBarHeight }}
      initialRouteName={routes.USER_STACK}
    >
      <TopTab.Screen
        name={routes.USER_STACK}
        component={UserStackNavigator}
      ></TopTab.Screen>
      <TopTab.Screen
        name={routes.MAP_SCREEN}
        component={MapScreen}
      ></TopTab.Screen>
    </TopTab.Navigator>
  );
};

export default ProTopTabNavigator;
