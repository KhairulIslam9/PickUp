import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

function ProfileText({ icon, value }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons style={styles.icon} name={icon} size={35} />
      <AppText style={styles.Text}>{value}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderBottomColor: colors.secondary,
    borderBottomWidth: 2,
    paddingLeft: 30,
    marginBottom: 30,
  },
  Text: {
    fontSize: 20,
    marginLeft: 40,
  },
  icon: {
    padding: 5,
  },
});

export default ProfileText;
