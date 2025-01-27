
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import useCarts from '../../../Hooks/useCarts';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Carts = () => {
    const [cart, refetch] = useCarts()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()


    const handleDeleteItem = (id) => {
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

                axiosSecure.delete(`/carts/${id}`)
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
                <title>Bistro Boss || Dashboard</title>
            </Helmet>

            <SectionTitle
                subheading="--- My Carts ---"
                heading="Wanna add more?"
            ></SectionTitle>

            <div className='flex justify-around text-2xl'>
                <h1>Total order : {cart.length}</h1>
                <h1>Total price : {totalPrice}</h1>
                {
                    cart.length ? <Link to="/dashboard/payment">
                        <button className='btn btn-primary'>Pay</button></Link>
                        :
                        <button disabled className='btn btn-primary'>Pay</button>
                }
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={item.image} alt="Item picture" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handleDeleteItem(item._id)} className="btn"><FaTrashAlt className='text-red-600'></FaTrashAlt></button>
                                </th>
                            </tr>)}


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Carts;