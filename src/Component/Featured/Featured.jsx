import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import featureImage from "./../../assets/Home/featured.jpg"
import './../../assets/style/Feature/featured-item.css'


const Featured = () => {
    return (
        <section className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subheading={"--- Check it out ---"}
                heading={"featured Item"}
            ></SectionTitle>


            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featureImage} alt="" />
                </div>

                <div className="md:ml-10 space-y-2">
                    <p>Aug 05, 2024</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia rerum fugiat laboriosam expedita delectus eaque tempore quidem natus soluta facere dolorum, consequuntur ipsam cum esse iste voluptas. Aliquam, totam eos sit repudiandae quod laborum corrupti, a amet nemo optio est architecto libero omnis rem. Iure magni nobis dignissimos nisi exercitationem.</p>
                    <Link to="/order" className="btn btn-outline text-white">Order now</Link>
                </div>

            </div>
            
        </section>
    );
};

export default Featured;