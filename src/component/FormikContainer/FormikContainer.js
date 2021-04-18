import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const FormikContainer = () => {
  const initialValues = {};
  const validationSchema = {};
  const onSubmit = (values) => console.log("Form values", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <button type='submit'>submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
