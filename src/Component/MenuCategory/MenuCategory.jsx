import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="my-16">
            {title && <Cover img={img} title={title} />}
            <div className='grid md:grid-cols-2 gap-8 mt-8'>
                {
                    items.map((item) =>
                        <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                }

            </div>

            <Link to={`/order/${title? title : 'salad'}`} className="btn bg-[#F3F3F3] text-[#BB8506] border-0 border-b-2 border-[#BB8506] mt-5 ">Order now</Link>
        </div>
    );
};

export default MenuCategory;