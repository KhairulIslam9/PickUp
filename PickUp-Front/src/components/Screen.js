import React from "react";
import { View, StyleSheet } from "react-native";

import Constants from "expo-constants";

function Screen({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
