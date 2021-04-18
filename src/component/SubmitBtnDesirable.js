import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
// details in formik
//Form is using for removing handleSubmit from form field
//Field using for removing input field and manage values, handleChange and handleBlur
// FastField converting Field and  using for render reducing
//ErrorMessage using for showing error and pass a name value

import * as Yup from "yup";
import TextError from "./TextError";
const initialValues = {
  name: "Azizl",
  email: "",
  channel: "",
  comments: "",
  // Adding Address with props
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  //multiple phone number in an array
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

//field level validationSchema
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

function SubmitBtnDesirable() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      //stopping validation
      // validationOnChange={false}
      // validationOnBlur={false}

      //first way for visible submit button
      validateOnMount
    >
      {(formik) => {
        console.log("formik render", formik);
        return (
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
              <label htmlFor='comments'>Comments</label>
              <Field
                type='text'
                as='textarea'
                id='comments'
                name='comments'
                validate={validateComments}
              />
              <ErrorMessage name='comments' component={TextError} />
            </div>

            {/* Adding Address with Props */}
            {/* using FirstField for reducing render */}
            <div className='form-control'>
              <label htmlFor='address'>Address</label>
              <FastField name='address'>
                {(props) => {
                  // console.log("props render");
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
              </FastField>
              {/* <Field name='address'>
            {(props) => {
              console.log("props render");
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
          </Field> */}
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

            {/* multiple phone number added in an array */}
            <div className='form-control'>
              <label>List of Phone Number</label>
              <FieldArray name='phNumbers'>
                {(fieldArrayProps) => {
                  // console.log("fieldArrayProps", fieldArrayProps);
                  // const { form, push, remove } = fieldArrayProps;
                  // const { values } = form;
                  // const { phNumbers } = values;
                  //code reduce, using nested destructuring
                  const {
                    form: {
                      values: { phNumbers },
                    },
                    push,
                    remove,
                  } = fieldArrayProps;
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type='button' onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <button
              type='button'
              onClick={() => formik.validateField("comments")}
            >
              Validation Comments
            </button>
            <button type='button' onClick={() => formik.validateForm()}>
              Validation All
            </button>
            <button
              type='button'
              onClick={() => formik.setFieldTouched("comments")}
            >
              Validation Comments
            </button>
            <button
              type='button'
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              Validation Comments
            </button>
            {/* first way for submit button visible */}
            {/* <button type='submit' disabled={!formik.isValid}>
              Submit
            </button> */}
            {/* second way for submit button visible and using "formik.dirty" */}
            <button type='submit' disabled={!(formik.dirty && formik.isValid)}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SubmitBtnDesirable;
