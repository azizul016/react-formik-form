import "./App.css";
import CourseEnrollForm from "./component/Formik-Authentication/Common/Authentication-Form/CourseEnrollForm";
import Login from "./component/Formik-Authentication/Common/Authentication-Form/Login";
import Registration from "./component/Formik-Authentication/Common/Authentication-Form/Registration";
import FormikContainer from "./component/Formik-Authentication/Common/FormikContainer";

function App() {
  return (
    <div className='App'>
      {/* <FormikContainer /> */}
      {/* <Login /> */}
      {/* <Registration /> */}
      <CourseEnrollForm />
    </div>
  );
}

export default App;
