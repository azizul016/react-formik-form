import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "../FormikControl";
import * as Yup from "yup";

const Registration = () => {
  const options = [
    { key: "email", value: "emailMadeOfContact" },
    { key: "telephone", value: "telephoneMadeOfContact" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephoneMadeOfContact",
      then: Yup.string().required("Required"),
    }),
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
            <FormikControl
              control='input'
              type='password'
              name='confirmPassword'
              label='Confirm Password'
              placeholder='Confirm Password'
            />
            <FormikControl
              control='radio'
              name='modeOfContact'
              label='Mode Of Contact'
              placeholder='Mode Of Contact'
              options={options}
            />
            <FormikControl
              control='input'
              type='text'
              name='phone'
              label='Phone Number'
              placeholder='Phone Number'
              options={options}
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

export default Registration;
