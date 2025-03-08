import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Catagory/Catagory";
import PopularMenu from "../../Component/PopolarMenu/PopularMenu";
import Featured from "../../Component/Featured/Featured";
import Testimonials from "../../Component/Testimonials/Testimonials";
import Recommend from "../../Component/Recommend/Recommend";
import BistroBoss from "../../Component/Boss/BistroBoss";
import { Helmet } from "react-helmet-async";
import Call from "../../Component/Call/Call";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home </title>
      </Helmet>

      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <Category />
        <BistroBoss />
        <PopularMenu />
        <Call />
        <Recommend />
      </div>
      <Featured />
      <div className="max-w-screen-xl mx-auto">
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePage;
