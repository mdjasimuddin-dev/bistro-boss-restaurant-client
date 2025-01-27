import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from 'react-icons/fa';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu'>

                    {
                        isAdmin ? <>
                            
                            <li><NavLink to="/dashboard/adminHome"> <FaHome />Admin Home </NavLink></li>
                            <li><NavLink to="/dashboard/addItems"> <FaUtensils /> Add Items </NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"> <FaList /> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/bookings"> <FaBook /> Manage Bookings </NavLink></li>
                            <li><NavLink to="/dashboard/users"> <FaUser /> All Users</NavLink></li>
                        </>
                            : <>
                                <li><NavLink to="/dashboard/userHome"> <FaHome />User Home </NavLink></li>
                                <li><NavLink to="/dashboard/reservation"> <FaCalendar /> Reservation </NavLink></li>
                                <li><NavLink to="/dashboard/cart"> <FaShoppingCart /> My carts</NavLink></li>
                                <li><NavLink to="/dashboard/review"> <FaAd /> Review </NavLink></li>
                                <li><NavLink to="/dashboard/booking"> <FaList /> Booking</NavLink></li>
                            </>
                    }

                    <div className="divider"></div>


                    <li><NavLink to="/"> <FaHome /> Home </NavLink></li>
                    <li><NavLink to="/order/salad"> <FaSearch /> Menu </NavLink></li>
                    <li><NavLink to="/order/contact"> <FaEnvelope /> Contact </NavLink></li>

                </ul>
            </div>

            <div className='flex-1'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;