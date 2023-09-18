// import DaisyNav from "./components/DaisyNav";
import LineChart from "./components/LineChart";
import Navbar from "./components/Navbar";
import Phones from "./components/Phones";
import PricingOptions from "./components/PricingOptions";

function App() {
  return (
    <>
      <Navbar />
      {/* <DaisyNav /> */}
      <PricingOptions />
      <LineChart />
      <Phones />
    </>
  );
}

export default App;
