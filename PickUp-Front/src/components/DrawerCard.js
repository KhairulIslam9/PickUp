import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function DrawerCard({ icon, name, onPress }) {
  return (
    <TouchableHighlight underlayColor="red" onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name={icon} size={30} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  text: {
    fontSize: 25,
    marginLeft: 30,
  },
});

export default DrawerCard;
