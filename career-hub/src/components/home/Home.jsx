import Banner from "../banner/Banner";
import CategoryList from "../categoryList/CategoryList";
import FeaturedJobs from "../jobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategoryList />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
