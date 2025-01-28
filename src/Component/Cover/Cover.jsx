import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-content text-neutral-content text-center bg-[#15151599] p-10 px-36">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-cinzel font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
