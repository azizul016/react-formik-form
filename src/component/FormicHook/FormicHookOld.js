import React from "react";
import { useFormik } from "formik";
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

//validation formik value
const validate = (values) => {
  let errors = {};
  //this error is values.name, values.email, values.chanelName
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please Provide Valid Email";
  }
  if (!values.chanelName) {
    errors.chanelName = "Required";
  }

  return errors;
};

//yap schema validation;
const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  chanelName: yup.string().required("Required"),
});

const FormicHookOld = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  return (
    <div>
      <div className='text-center'>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.name}
              //alternative
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='error'>{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.email}
              //alternative
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='error'>{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor='chanelName'>Chanel Name</label>
            <input
              type='text'
              name='chanelName'
              id='chanelName'
              // onChange={formik.handleChange}
              // value={formik.values.chanelName}
              // onBlur={formik.handleBlur}
              //alternative
              {...formik.getFieldProps("chanelName")}
            />
            {formik.touched.chanelName && formik.errors.chanelName ? (
              <div className='error'>{formik.errors.chanelName}</div>
            ) : null}
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormicHookOld;
