import "./App.css";
import CustomHookForm from "./components/customHook/CustomHookForm";
import ControlledForm from "./components/forms/ControlledForm";
import Forms from "./components/forms/Forms";
import RefForm from "./components/forms/RefForm";

function App() {
  return (
    <>
      <Forms />
      <ControlledForm />
      <RefForm />
      <CustomHookForm />
    </>
  );
}

export default App;
