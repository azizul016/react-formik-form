import React from "react";
import { Formik, Field, Form } from "formik";
import FormikControl from "../FormikControl";
import * as Yup from "yup";

const CourseEnrollForm = () => {
  const courseDropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <div>
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
                type='text'
                name='bio'
                label='BIO'
                placeholder='Enter your bio'
              />
              <FormikControl
                control='select'
                name='course'
                label='Select your course'
                options={courseDropdownOptions}
              />
              <FormikControl
                control='checkbox'
                name='skills'
                label='Select your skills'
                options={checkboxOptions}
              />
              <FormikControl
                control='date'
                label='Pick a Date'
                name='courseDate'
              />

              {/* first way for disabled in submit btn */}
              {/* <button type='submit' disabled={!formik.isValid}> */}
              {/* second way for disabled in submit btn */}
              <button
                type='submit'
                disabled={!(formik.dirty && formik.isValid)}
              >
                submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CourseEnrollForm;
