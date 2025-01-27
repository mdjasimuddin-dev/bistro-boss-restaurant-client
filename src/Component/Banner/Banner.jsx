import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// slider image
import img1 from "./../../assets/Home/01.jpg";
import img2 from "./../../assets/Home/02.jpg";
import img3 from "./../../assets/Home/03.png";
import img4 from "./../../assets/Home/04.jpg";
import img5 from "./../../assets/Home/05.png";
import img6 from "./../../assets/Home/06.png";

const Banner = () => {
  return (
    <div className="max-h-[650px ">
      <Carousel>
        <div className="h-[700px]">
          {/* <img src="https://i.postimg.cc/63v5yDVR/01.jpg" /> */}
          <img src={img1} />
        </div>
        <div className="h-[700px]">
          {/* <img src="https://i.postimg.cc/QMRjGfLM/02.jpg" /> */}
          <img src={img2} />
        </div>
        <div className="h-[700px]">
          {/* <img src="https://i.postimg.cc/yYVsHJG0/03.png" /> */}
          <img src={img3} />
        </div>
        <div className="h-[700px]">
          {/* <img src="https://i.postimg.cc/SxPhCgxG/04.jpg" /> */}
          <img src={img4} />
        </div>
        <div className="h-[700px]">
          {/* <img src="https://i.postimg.cc/vTGFbj0G/05.png" /> */}
          <img src={img5} />
        </div>
        <div className="h-[700px]">
          {/* <img src="https://i.postimg.cc/GmGQx2cS/06.png" /> */}
          <img src={img6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
