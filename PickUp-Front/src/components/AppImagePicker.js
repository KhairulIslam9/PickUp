import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppImagePicker({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("Vous devez autoriser l'accès à la galerie");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error any", error);
    }
  };

  const handlerPress = () => {
    selectImage();
  };

  return (
    <TouchableWithoutFeedback onPress={handlerPress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            colors={colors.medium}
            name="camera"
            size={150}
          />
        )}
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 50,
    height: 200,
    justifyContent: "center",
    overflow: "hidden",
    width: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default AppImagePicker;
