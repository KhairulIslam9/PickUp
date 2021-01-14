import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { connect } from "react-redux";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  AppForm,
  SubmitButton,
  AppFormField,
  FormImagePicker,
} from "../../../components/forms";
import useAuth from "../../../auth/useAuth";
import useApi from "../../../hooks/useApi";
import customerApi from "../../../api/customer";
import ProfileText from "../../../components/ProfileText";
import routes from "../../../config/routes";
import { useState } from "react";
import colors from "../../../config/colors";

const avatarDefault =
  "https://www.cfppa-segre.com/wp-content/uploads/2018/06/avatar-anonyme.png";

const initialValues = {
  images: null,
};

const validationSchema = Yup.object().shape({
  images: Yup.string().required(),
});

const ProfileScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { customer } = useAuth();
  const imageUploadApi = useApi(customerApi.imageUpload);
  const customerUpdateApi = useApi(customerApi.update);

  const handleSubmit = async (form) => {
    console.log(form);
    const images = [form.images];
    const resultUpload = await imageUploadApi.request(images);

    if (!resultUpload.ok) {
      console.log("Server Image 404");
      return;
    }
    const image = resultUpload.data;

    const resultUpdate = await customerUpdateApi.request(image, customer);
    if (!resultUpdate.ok) {
      console.log(resultUpdate, "Update Error");
      return;
    }
    customer.url = image[0].url;
    setModalVisible(false);
  };

  const handleModal = () => {
    setModalVisible(false);
  };

  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, styles.imageSelf]}
        source={{
          uri: customer
            ? customer.url
              ? customer.url
              : avatarDefault
            : avatarDefault,
        }}
      />
      <ProfileText icon={"account"} value={customer.firstName} />
      <ProfileText icon={"account"} value={customer.lastName} />
      <ProfileText icon={"cellphone"} value={customer.phoneNum} />
      <ProfileText icon={"email"} value={customer.email} />
      <TouchableOpacity style={styles.icon} onPress={handlePress}>
        <MaterialCommunityIcons name="account-edit" size={50} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          alert("Modal has been");
        }}
      >
        <View style={styles.modal}>
          <TouchableOpacity style={styles.iconModal} onPress={handleModal}>
            <MaterialCommunityIcons name="close" size={50} />
          </TouchableOpacity>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <View style={[styles.image, { marginBottom: "30%" }]}>
              <FormImagePicker name="images" />
            </View>
            <SubmitButton title="post"></SubmitButton>
          </AppForm>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },
  imageSelf: {
    alignSelf: "center",
  },
  image: {
    height: 150,
    width: 150,
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 30,
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primary,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
    right: 15,
  },
  modal: {
    margin: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light,
    padding: 10,
    opacity: 0.95,
    width: "80%",
    height: "80%",
  },
  iconModal: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

const mapStateToProps = (state) => {
  return state.user;
};

export default connect(mapStateToProps)(ProfileScreen);
