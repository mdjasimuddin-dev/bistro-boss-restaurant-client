

const MenuItem = ({ item }) => {
  console.log(item);
  const { name, recipe, image, price } = item;
  return (
    <div className="">
      <div className="flex space-x-2">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[100px]"
          src={image}
          alt=""
        />
        <div>
          <h2 className="uppercase text-xl">{name}</h2>
          <p>{recipe}</p>
        </div>
        <p className="text-xl flex justify-end flex-grow text-[#BB8506] font-bold">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
