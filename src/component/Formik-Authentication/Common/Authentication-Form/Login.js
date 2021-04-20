import React from "react";
import { Formik, Field, Form } from "formik";
import FormikControl from "../FormikControl";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      //   first way for disabled in submit btn
      //   validateOnMount
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control='input'
              name='email'
              type='text'
              placeholder='Enter your email address'
              label='Email'
            />
            <FormikControl
              control='input'
              type='password'
              name='password'
              label='Password'
              placeholder='Enter your password'
            />
            {/* first way for disabled in submit btn */}
            {/* <button type='submit' disabled={!formik.isValid}> */}
            {/* second way for disabled in submit btn */}
            <button type='submit' disabled={!(formik.dirty && formik.isValid)}>
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
