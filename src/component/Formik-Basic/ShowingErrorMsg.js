import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../Errors/TextError";
const initialValues = {
  name: "Azizl",
  email: "",
  channel: "",
  textarea: "",
  // Adding Address with props
  address: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

function ShowingErrorMsg() {
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
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default ShowingErrorMsg;
