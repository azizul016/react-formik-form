import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../../Errors/TextError";

const Input = (props) => {
  console.log("Input", props);
  const { name, label, ...rest } = props;
  console.log(rest);
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
