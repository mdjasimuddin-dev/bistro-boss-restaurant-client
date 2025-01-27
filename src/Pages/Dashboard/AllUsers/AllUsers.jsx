import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { MdGroups } from "react-icons/md";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
                    .then(result => {
                        console.log(result)
                        if (result.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        });
    }

    return (
        <div>

            <Helmet>
                <title>All Users || Dashboard </title>
            </Helmet>

            <div className='flex justify-evenly my-4'>
                <h3 className="text-3xl">All Users</h3>
                <h3 className='text-3xl'>Total Users : {users.length}</h3>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{
                                        user.role === 'admin' ? "Admin" : <button onClick={() => handleMakeAdmin(user)} className='btn btn-ghost bg-orange-600'></button>
                                    }</td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user._id)} className='btn btn-ghost'><FaTrashAlt className='text-red-600 text-lg' /></button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;