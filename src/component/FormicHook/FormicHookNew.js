import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import ErrorText from "./ErrorText";

//initial values;
const initialValues = {
  name: "rana",
  //you can give default values
  //   name: "",
  email: "",
  chanelName: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
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
  comments: yup.string().required("Required"),
  address: yup.string().required("Required"),
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
            {/* First way for error messages */}
            <ErrorMessage name='name' component={ErrorText} />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <Field type='email' name='email' id='email' />
            <ErrorMessage name='email'>
              {/* second way for error messages */}
              {(errMsg) => <div className='error'>{errMsg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor='chanelName'>Chanel Name</label>
            <Field type='text' name='chanelName' id='chanelName' />
            <ErrorMessage name='chanelName' component={ErrorText} />
          </div>
          <div>
            <label htmlFor='comments'>Comments</label>
            <Field
              as='textarea'
              type='text'
              name='comments'
              id='comments'
              placeholder='Please write a comment'
            />
          </div>
          <div>
            <label htmlFor='address'>Address</label>
            <Field name='address'>
              {(props) => {
                // console.log(props);
                const { field, form, meta } = props;
                return (
                  <div>
                    <input id='address' {...field} />
                    {meta.touched && meta.error ? (
                      <div className='error'>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <div>
            <div>
              <label htmlFor='facebook'>Facebook Profile</label>
              <Field id='facebook' type='text' name='social.facebook' />
            </div>
            <div>
              <label htmlFor='twitter'>Twitter Profile</label>
              <Field id='twitter' type='text' name='social.twitter' />
            </div>
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormicHookNew;
