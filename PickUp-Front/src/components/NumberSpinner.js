import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

function NumberSpinner({ value, onChange }) {
  //   const [val, setValue] = useState(value);

  const handleUp = () => {
    let a = parseInt(value);
    a += 1;
    onChange(a);
  };

  const handleDown = () => {
    value -= 1;
    onChange(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.TextContainer}>
        <TextInput
          maxLength={null}
          editable={false}
          value={value.toString()}
          textContentType="telephoneNumber"
          onChangeText={onChange}
          style={styles.Text}
        ></TextInput>
      </View>

      <View>
        <TouchableOpacity style={styles.Spinner} onPress={handleUp}>
          <AntDesign name="up" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Spinner} onPress={handleDown}>
          <AntDesign name="down" size={25} />
        </TouchableOpacity>
      </View>
      {/* <InputSpinner
        min={0}
        max={10}
        value={number}
        onChange={(event) => console.log(event)}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  Spinner: {
    backgroundColor: colors.light,
    borderWidth: 2,
    borderColor: "black",
  },
  TextContainer: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRightWidth: 0,
  },
  Text: {
    fontSize: 25,
  },
});

export default NumberSpinner;
