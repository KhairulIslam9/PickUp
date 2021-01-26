import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function ReservationCard({
  backgroundColor = colors.secondary,
  duration,
  starthour,
  endHour,
  numberAvailable,
  onPress,
}) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={[styles.container, { backgroundColor }]}>
        <AppText style={{ fontSize: 24 }}>
          {starthour.slice(0, 5)} - {endHour.slice(0, 5)}
        </AppText>
        <AppText>Durée : {duration}</AppText>
        <AppText>Place Disponible: {numberAvailable}</AppText>
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
