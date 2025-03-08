import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import featureImage from "./../../assets/Home/featured.jpg";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-8 my-20 relative">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black brightness-50"
        style={{
          backgroundImage: `url(${featureImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <SectionTitle
          subheading={"--- Check it out ---"}
          heading={"Featured Item"}
        />

        <div className="md:flex justify-center items-center pb-20 pt-12">
          <div>
            <img
              src={featureImage}
              alt="Featured"
              className="shadow-lg rounded-lg"
            />
          </div>

          <div className="md:ml-10 space-y-2  bg-opacity-20 p-6 rounded-lg">
            <p className="text-2xl font-inter">Aug 05, 2024</p>
            <p className="text-2xl font-inter uppercase">
              Where can I get some?
            </p>
            <p className=" font-inter">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              rerum fugiat laboriosam expedita delectus eaque tempore quidem
              natus soluta facere dolorum, consequuntur ipsam cum esse iste
              voluptas. Aliquam, totam eos sit repudiandae quod laborum
              corrupti, a amet nemo optio est architecto libero omnis rem. Iure
              magni nobis dignissimos nisi exercitationem.
            </p>
            
            <Link
              to="/order"
              className="btn bg-transparent text-[#FFFFFF] border-0 border-b-2 border-[#FFFFFF] uppercase text-xl hover:border-t-2 hover:text-orange-500 hover:bg-transparent hover:border-b-0"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
    // <section className={`bg-fixed text-white pt-8 my-20 relative`}>
    //   {/* background image and use overlay */}
    //   <div
    //     className="absolute"
    //     style={{
    //       backgroundImage: `url(${featureImage})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //   ></div>

    //   <div className="max-w-screen-xl mx-auto">
    //     <SectionTitle
    //       subheading={"--- Check it out ---"}
    //       heading={"featured Item"}
    //     ></SectionTitle>

    //     <div className={`md:flex justify-center items-center pb-20 pt-12`}>
    //       <div>
    //         <img src={featureImage} alt="" />
    //       </div>

    //       <div className="md:ml-10 space-y-2">
    //         <p>Aug 05, 2024</p>
    //         <p className="uppercase">Where can I get some?</p>
    //         <p>
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
    //           rerum fugiat laboriosam expedita delectus eaque tempore quidem
    //           natus soluta facere dolorum, consequuntur ipsam cum esse iste
    //           voluptas. Aliquam, totam eos sit repudiandae quod laborum
    //           corrupti, a amet nemo optio est architecto libero omnis rem. Iure
    //           magni nobis dignissimos nisi exercitationem.
    //         </p>
    //         <Link to="/order" className="btn btn-outline text-white">
    //           Order now
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Featured;
