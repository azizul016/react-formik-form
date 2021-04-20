import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../../../Errors/TextError";

const RadioButton = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className='form-control'>
      {/* <div>
            <input type="radio" name="radioInput" id="radioInput1" value="radioValue"/>
            <label htmlFor="radioInput1">Radio Value</label>
        </div> */}
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          //   console.log("field", field); name, onChange, onBlur value is here
          return options?.map((option) => (
            <React.Fragment key={option?.key}>
              <input
                type='radio'
                id={option?.value}
                {...field}
                value={option?.value}
                checked={option?.value === field?.value}
              />
              <label htmlFor={option?.value}>{option?.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButton;
