import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h2>this is home</h2>
      <Outlet />
    </div>
  );
};

export default Home;
