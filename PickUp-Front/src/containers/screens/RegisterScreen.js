import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../../components/forms";
import customerApi from "../../api/customer";
import authApi from "../../api/auth";
import useAuth from "../../auth/useAuth";
import useApi from "../../hooks/useApi";
import AppActivityIndicator from "../../components/AppActivityIndicator";
import routes from "../../config/routes";

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNum: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(2).label("FirstName"),
  lastName: Yup.string().required().min(2).label("LastName"),
  phoneNum: Yup.string().required(),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(1).label("Password"),
});

const RegisterScreen = (props) => {
  const registerApi = useApi(customerApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (customerInfo) => {
    const result = await registerApi.request(customerInfo);
    if (!result.ok) {
      // ne montre rien car la db ne renvoie rien lors d'une error
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      customerInfo.email,
      customerInfo.password
    );
    auth.logIn(authToken);
    props.navigation.navigate(routes.HOME_SCREEN);
  };
  return (
    <>
      <AppActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <View style={styles.container}>
        <AppForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            caretHidden
            icon="account"
            name="firstName"
            placeholder="Prénom"
          />
          <AppFormField
            caretHidden
            icon="account"
            name="lastName"
            placeholder="Nom de famille"
          />
          <AppFormField
            caretHidden
            autoCapitalize="none"
            autoCorrect={false}
            icon="cellphone"
            keyboardType="number-pad"
            name="phoneNum"
            placeholder="Numéro Telephone"
          />
          <AppFormField
            caretHidden
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
          />
          <AppFormField
            caretHidden
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <SubmitButton title="Register" />
        </AppForm>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RegisterScreen;
