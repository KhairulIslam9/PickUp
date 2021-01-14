import React from "react";
import { useFormikContext } from "formik";

import AppImagePicker from "../AppImagePicker";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = (uri) => {
    // setFieldValue(name, [...values[name], uri]);
    setFieldValue(name, uri);
  };

  return (
    <>
      <AppImagePicker imageUri={values[name]} onChangeImage={handleAdd} />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
