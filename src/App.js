import logo from "./logo.svg";
import "./App.css";
import OldYouTubeForm from "./component/OldYouTubeForm";
import SimpleFrom from "./component/SimpleFrom";
import YouTubeForm from "./component/YouTubeForm";
import OldYouTubeFormUpdate from "./component/OldYouTubeFormUpdate";
import OldYouTubeFromUpdateTwo from "./component/OldYouTubeFromUpdateTwo";
import ShowingErrorMsg from "./component/ShowingErrorMsg";
import YouTubeFormWithObjectArray from "./component/YouTubeFormWithObjectAndArray";

function App() {
  return (
    <div className='App'>
      {/* <SimpleFrom /> */}
      {/* <OldYouTubeForm /> */}
      {/* <OldYouTubeFormUpdate /> */}
      {/* <OldYouTubeFromUpdateTwo /> */}
      {/* <ShowingErrorMsg /> */}
      {/* <YouTubeFormWithObjectArray /> */}
      <YouTubeForm />
    </div>
  );
}

export default App;
