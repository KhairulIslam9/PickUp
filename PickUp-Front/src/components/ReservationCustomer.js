import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

function ReservationCustomer({
  backgroundColor = colors.secondary,
  item,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <View style={[styles.container, { backgroundColor }]}>
          <Image style={styles.image} source={{ uri: item.url }} />
          <View style={styles.details}>
            <AppText style={styles.title}>{item.name}</AppText>
            <AppText>{item.resDate}</AppText>
            <AppText>
              {item.startHour.slice(0, 5)} -{item.endHour.slice(0, 5)}
            </AppText>
            <AppText>Durée : {item.startHour - item.endHour}</AppText>
            <AppText>Nombre de Personne: {item.numPlaceAvailable}</AppText>
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 35,
    overflow: "hidden",
    padding: 10,
    paddingLeft: 20,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  details: {
    marginLeft: 15,
  },
  imageContainer: {},
  image: {
    width: 100,
    height: "100%",
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ReservationCustomer;
