import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header />
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}
      <Footer />
    </div>
  );
};

export default Home;
