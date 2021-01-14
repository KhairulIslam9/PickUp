import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "./AppText";

const imageDefault =
  "https://image.jeuxvideo.com/medias-md/157322/1573218990-3497-card.jpg";

function UserCard({
  backgroundColor = colors.secondary,
  headerTitle,
  image = imageDefault,
  imageWidth = "100%",
  imageHeight = 200,
  onPress,
  thumbnail,
}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.header, { backgroundColor: backgroundColor }]}>
          <AppText style={styles.text}>{headerTitle}</AppText>
        </View>
        <View>
          <Image
            style={{ width: imageWidth, height: imageHeight }}
            preview={{ uri: thumbnail }}
            uri={image}
            tint="light"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  header: {
    flex: 1,
    padding: 5,
  },
  text: {
    color: "#a25133",
    textAlign: "center",
  },
});

export default UserCard;
