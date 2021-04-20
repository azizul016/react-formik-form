import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  //for radio buttons
  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];

  //for checkbox
  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkoutOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkoutOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form values", values);
    console.log("jsonValue", JSON.parse(JSON.stringify(values)));
  };
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
          <FormikControl
            control='textarea'
            type='text'
            label='Description'
            name='description'
            placeholder='Description'
          />
          <FormikControl
            control='select'
            label='Select & Options'
            name='selectOption'
            options={dropdownOptions}
          />
          <FormikControl
            control='radio'
            label='Radio Topic'
            name='radioOption'
            options={radioOptions}
          />
          <FormikControl
            control='checkbox'
            label='Checkbox Topic'
            name='checkoutOption'
            options={checkboxOptions}
          />
          <FormikControl control='date' label='Pick a Date' name='birthDate' />
          <button type='submit'>submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
