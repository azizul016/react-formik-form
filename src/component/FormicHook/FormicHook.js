import React from "react";
import { useFormik } from "formik";

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

const FormicHook = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
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
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div>
            <label htmlFor='chanelName'>Chanel Name</label>
            <input
              type='text'
              chanelName='chanelName'
              id='chanelName'
              onChange={formik.handleChange}
              value={formik.values.chanelName}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormicHook;
