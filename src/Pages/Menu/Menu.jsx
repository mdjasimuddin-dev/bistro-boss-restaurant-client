
import { Helmet } from "react-helmet-async";
import Cover from "../../Component/Cover/Cover";

import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import MenuCategory from "../../Component/MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  // const soup = menu.filter(item => item.category === 'soup')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>

      <Cover img={menuImg} title="Our menu" />

      <SectionTitle subheading="---Don't miss---" heading="Today's offers" />
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        img={dessertImg}
        title="dessert"
      ></MenuCategory>
      <MenuCategory items={pizza} img={pizzaImg} title="pizza"></MenuCategory>
      <MenuCategory items={salad} img={saladImg} title="salad"></MenuCategory>
      <MenuCategory items={soup} img={soupImg} title="soup"></MenuCategory>
    </div>
  );
};

export default Menu;
