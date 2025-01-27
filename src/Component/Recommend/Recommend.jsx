import React, { useState } from 'react';
import SectionTitle from './../SectionTitle/SectionTitle';
import FoodCard from '../FoodCard/FoodCard';
import useMenu from '../../Hooks/useMenu';


const Recommend = () => {

    const [menu] = useMenu()

    const recommendItem = menu.slice(0, 3)

    return (
        <section className='md:my-32'>
            <SectionTitle
                subheading={"---Should Try---"}
                heading={"Chef Recommends"}
            ></SectionTitle>

            <div className='grid md:grid-cols-3 gap-10'>
                {
                    recommendItem.map(data => <FoodCard
                        key={data._id}
                        item={data}>
                    </FoodCard>)
                }
            </div>

        </section>
    );
};

export default Recommend;