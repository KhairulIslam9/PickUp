import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../../components/forms";
import authApi from "../../api/auth";
import useAuth from "../../auth/useAuth";
import routes from "../../config/routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(1).label("Password"),
});

const LoginScreen = (props) => {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    logIn(result.data);
    props.navigation.navigate(routes.HOME_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/PickUp.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Email et/ou mot de passe invalide"
          visible={loginFailed}
        />
        <AppFormField
          // For Xiaomie
          caretHidden
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
        />
        <AppFormField
          // Fro Xiaomie
          caretHidden
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
