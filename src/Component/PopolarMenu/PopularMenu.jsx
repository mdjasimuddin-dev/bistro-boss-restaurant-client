import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  // useEffect(() => {
  //     fetch("/menu.json")
  //         .then(res => res.json())
  //         .then(data => {
  //             const popularItems = data.filter(item => item.category === 'popular')
  //             setMenu(popularItems)
  //         })
  // }, [])

  return (
    <section className="mb-12">
      <SectionTitle
        subheading={"--- Check it out ---"}
        heading={"from our menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          // onClick={() => handleAddtoCart(item)}
          className="btn border-0 uppercase bg-transparent border-b-2 border-[#BB8506] text-xl hover:border-t-2 hover:border-[#BB8506] hover:border-b-0 hover:bg-transparent"
        >
          View Full  Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
