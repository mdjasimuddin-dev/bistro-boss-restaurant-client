import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="flex flex-col justify-center mx-auto">
      {title && <Cover img={img} title={title} />}
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 mt-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="flex flex-col justify-center mx-auto my-5">
        <Link
          to={`/order/${title ? title : "salad"}`}
          className="btn bg-[#F3F3F3] text-[#BB8506] uppercase bg-transparent border-0 border-b-2 border-[#BB8506] mt-5 "
        >
          Order Your Favorite Food
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
