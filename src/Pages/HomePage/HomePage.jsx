import React from "react";
import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Catagory/Catagory";
import PopularMenu from "../../Component/PopolarMenu/PopularMenu";
import Featured from "../../Component/Featured/Featured";
import Testimonials from "../../Component/Testimonials/Testimonials";
import Recommend from "../../Component/Recommend/Recommend";
import BistroBoss from "../../Component/Boss/BistroBoss";
import Call from "../../Component/call/Call";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <Category />
        <BistroBoss />
        <PopularMenu />
        <Call/>
        <Recommend />
        <Featured />
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePage;
