import React from "react";
import UserTopTabNavigator from "./UserTopTabNavigator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import DrawerNavigator from "./DrawerNavigator";
import routes from "../../config/routes";

const Tab = createMaterialBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.HOME_PAGE}
      labeled={false}
      shifting={true}
      barStyle={{ backgroundColor: "transparent" }}
    >
      <Tab.Screen
        name={routes.HOME_PAGE}
        component={DrawerNavigator}
        options={{
          tabBarColor: "#bc0029",
          tabBarLabel: "home",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.USER_TOP_TAB}
        component={UserTopTabNavigator}
        options={{
          tabBarColor: "#bc0029",
          tabBarLabel: routes.USER_TOP_TAB,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-restaurant" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
