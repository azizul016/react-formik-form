import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
  });
  const onSubmit = (values) => console.log("Form values", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control='input'
            type='text'
            label='Email'
            name='email'
            placeholder='Enter your Email Address'
          />
          <button type='submit'>submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
