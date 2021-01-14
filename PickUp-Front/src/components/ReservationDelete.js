import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ReservationDelete({ onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.touchable}
      onPress={onPress}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={60}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  touchable: {
    padding: 10,
  },
});

export default ReservationDelete;
