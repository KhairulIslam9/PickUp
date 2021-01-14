import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function ReservationCard({
  backgroundColor = colors.secondary,
  duration,
  hourStart,
  hourEnd,
  numberAvailable,
  numberReserved,
  onPress,
}) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={[styles.container, { backgroundColor }]}>
        <AppText style={{ fontSize: 24 }}>
          {hourStart} - {hourEnd}
        </AppText>
        <AppText>Durée : {duration}</AppText>
        <AppText>Place Disponible: {numberAvailable - numberReserved}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 35,
    overflow: "hidden",
    padding: 10,
    paddingLeft: 20,
    margin: 5,
  },
});

export default ReservationCard;
