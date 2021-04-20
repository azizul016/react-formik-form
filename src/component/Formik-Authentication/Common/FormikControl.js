import Input from "./AllInputField/Input";
import RadioButton from "./AllInputField/RadioButton";
import Select from "./AllInputField/Select";
import Textarea from "./AllInputField/Textarea";
import CheckboxGroup from "./AllInputField/CheckboxGroup";
import DatePickerInput from "./AllInputField/DatePickerInput";
import ChakraInput from "./AllInputField/ChakraInput";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  //rest value : {name: "email", id: "email", label: "Email", type: "text"}
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePickerInput {...rest} />;

    case "chakraInput":
      return <ChakraInput {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
