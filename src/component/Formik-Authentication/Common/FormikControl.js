import Input from "./Input";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  //rest value : {name: "email", id: "email", label: "Email", type: "text"}
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
