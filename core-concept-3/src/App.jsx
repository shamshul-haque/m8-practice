import "./App.css";
import ControlledForm from "./components/forms/ControlledForm";
import CustomHookForm from "./components/forms/CustomHookForm";
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
