import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function CategoryButton({
  backgroundColor = colors.light,
  name,
  onPress,
  underlayColor = colors.secondary,
}) {
  return (
    <TouchableHighlight
      style={[styles.container, { backgroundColor }]}
      underlayColor={underlayColor}
      onPress={onPress}
    >
      <AppText>{name}</AppText>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
});

export default CategoryButton;
