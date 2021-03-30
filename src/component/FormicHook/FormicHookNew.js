import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

//initial values;
const initialValues = {
  name: "rana",
  //you can give default values
  //   name: "",
  email: "",
  chanelName: "",
};

//from submit;
const onSubmit = (values) => {
  console.log("formik value", values);
};

//yap schema validation;
const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  chanelName: yup.string().required("Required"),
});

const FormicHookNew = () => {
  return (
    <div className='text-center'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor='name'>Name</label>
            <Field type='text' name='name' id='name' />
            <ErrorMessage name='name' />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <Field type='email' name='email' id='email' />
            <ErrorMessage name='email' />
          </div>
          <div>
            <label htmlFor='chanelName'>Chanel Name</label>
            <Field type='text' name='chanelName' id='chanelName' />
            <ErrorMessage name='chanelName' />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormicHookNew;
