import React from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import Constants from "expo-constants";

import DrawerCard from "../../components/DrawerCard";
import colors from "../../config/colors";
import useAuth from "../../auth/useAuth";
import routes from "../../config/routes";

const avatarDefault =
  "https://www.cfppa-segre.com/wp-content/uploads/2018/06/avatar-anonyme.png";

function CustomDrawerContent(props) {
  const { customer } = useAuth();
  return (
    <View>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: customer
                ? customer.url
                  ? customer.url
                  : avatarDefault
                : avatarDefault,
            }}
          />
          <Text style={styles.text}>
            {customer ? customer.lastName : "Nom"}
          </Text>
          <Text style={styles.text}>
            {customer ? customer.firstName : "Prénom"}
          </Text>
        </View>
        <DrawerCard
          icon="home-circle"
          name="Home"
          onPress={() => props.navigation.navigate(routes.HOME_SCREEN)}
        />
        {!customer && (
          <DrawerCard
            icon="login"
            name="Login"
            onPress={() => props.navigation.navigate(routes.LOGIN_SCREEN)}
          />
        )}
        {!customer && (
          <DrawerCard
            icon="account-plus"
            name="Register"
            onPress={() => props.navigation.navigate(routes.REGISTER_SCREEN)}
          />
        )}
        {customer && (
          <DrawerCard
            icon="account"
            name="Profile"
            onPress={() => props.navigation.navigate(routes.PROFILE_SCREEN)}
          />
        )}
        {customer && (
          <DrawerCard
            icon="calendar-check"
            name="Reservation"
            onPress={() => props.navigation.navigate(routes.RESERVATION_SCREEN)}
          />
        )}
        {customer && (
          <DrawerCard
            icon="cogs"
            name="Settings"
            onPress={() => props.navigation.navigate(routes.SETTINGS_SCREEN)}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: colors.secondary,
    padding: 20,
  },
  image: {
    marginTop: Constants.statusBarHeight,
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    paddingVertical: 3,
  },
});

export default CustomDrawerContent;
