import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import Constant from "expo-constants";

import colors from "../config/colors";
import AppText from "./AppText";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unkwon" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    alignItems: "center",
    backgroundColor: colors.danger,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    // paddingtop: Constant.statusBarHeight,
    width: "100%",
    zIndex: 1,
    elevation: 1,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});

export default OfflineNotice;
