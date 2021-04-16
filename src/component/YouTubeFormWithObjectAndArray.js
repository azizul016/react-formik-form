import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
const initialValues = {
  name: "Azizl",
  email: "",
  channel: "",
  textarea: "",
  // Adding Address with props
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

function YouTubeFormWithObjectArray() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />

          {/* way of showing error message */}
          {/* <ErrorMessage name='name' component='div' /> */}

          {/* showing error message with red color */}
          <ErrorMessage name='name' component={TextError} />

          {/* error message with props */}
          {/* <ErrorMessage name='name'>
            {(errMsg) => <div className='error'>{errMsg}</div>}
          </ErrorMessage> */}
        </div>

        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <Field type='email' id='email' name='email' />
          {/* <ErrorMessage name='email' /> */}
          <ErrorMessage name='email' component={TextError} />
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field type='text' id='channel' name='channel' />
          {/* <ErrorMessage name='channel' /> */}
          <ErrorMessage name='channel' component={TextError} />
        </div>

        {/* Text Area */}
        <div className='form-control'>
          <label htmlFor='textArea'>Text Area</label>
          <Field as='textarea' id='textArea' name='textArea' />
        </div>

        {/* Adding Address with Props */}
        <div className='form-control'>
          <label htmlFor='address'>Address</label>
          <Field name='address'>
            {(props) => {
              // console.log("Render props value", props);
              const { field, form, meta } = props;
              return (
                <div>
                  <input type='text' id='address' {...field} />
                  {meta?.touched && meta?.error ? (
                    <div>{meta.error}</div>
                  ) : null}
                </div>
              );
            }}
          </Field>
        </div>

        {/* adding social network such as facebook, twitter */}
        <div className='form-control'>
          <label htmlFor='facebook'>Facebook Profiles</label>
          <Field type='text' id='facebook' name='social.facebook' />
        </div>
        <div className='form-control'>
          <label htmlFor='twitter'>Twitter Profiles</label>
          <Field type='text' id='twitter' name='social.twitter' />
        </div>

        {/* adding phone number */}
        <div className='form-control'>
          <label htmlFor='primaryPhoneNo'>Primary Phone Number</label>
          <Field type='text' id='primaryPhoneNo' name='phoneNumber[0]' />
        </div>
        <div className='form-control'>
          <label htmlFor='secondaryPhoneNu'>Secondary Phone Number</label>
          <Field type='text' id='secondaryPhoneNu' name='phoneNumber[1]' />
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default YouTubeFormWithObjectArray;
