import { Helmet } from 'react-helmet-async';
import coverImg from '../../assets/order/banner2.jpg';
import Cover from '../../Component/Cover/Cover';
import useMenu from '../../Hooks/useMenu';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import OrderTabs from '../../Component/OrderTab/OrderTabs';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drink"];
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drink = menu.filter(item => item.category === 'drinks')

    return (
        <div>

            <Helmet>
                <title> Order | Bistro Shop</title>
            </Helmet>

            <Cover img={coverImg} title="Order Food" />
            <Tabs className="my-5" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drink} />
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default Order;