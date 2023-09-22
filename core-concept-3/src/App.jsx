import "./App.css";
import GrandFather from "./components/connection/GrandFather";
// import ControlledForm from "./components/forms/ControlledForm";
// import CustomHookForm from "./components/forms/CustomHookForm";
// import Forms from "./components/forms/Forms";
// import RefForm from "./components/forms/RefForm";
// import ReusableForm from "./components/forms/ReusableForm";

function App() {
  // const handleSignUp = (data) => {
  //   console.log("Sign Up:", data);
  // };
  // const handleUpdateProfile = (data) => {
  //   console.log("Update Profile:", data);
  // };
  return (
    <>
      {/* <Forms /> */}
      {/* <ControlledForm /> */}
      {/* <RefForm /> */}
      {/* <CustomHookForm /> */}
      {/* <ReusableForm handleSubmit={handleSignUp}>
        <div>
          <h3>Sign Up</h3>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        handleSubmit={handleUpdateProfile}
        submitButtonText={"Update"}
      >
        <div>
          <h3>Update Profile</h3>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}

      <GrandFather />
    </>
  );
}

export default App;
