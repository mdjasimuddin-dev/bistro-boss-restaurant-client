import chefServicesBg from "../../assets/Home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div className={`relative`}>
      <img src={chefServicesBg} className="w-full relative" alt="" />
      {/* top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 */}
      <div className="absolute top-16 bottom-16 left-28 right-28 border bg-white opacity-50 p-10 text-center flex flex-col justify-center items-center">
        <h3 className="text-5xl font-cinzel">Bistro Boss</h3>
        <p className="w-3/6 mx-auto mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
