
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import Swal from 'sweetalert2'
import useAxiosSecure from './../../Hooks/useAxiosSecure';
import useCarts from '../../Hooks/useCarts';

const FoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCarts()

    const handleAddtoCart = (food) => {
        if (user && user.email) {
            //TODO : cart item data store database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                recipe,
                image,
                price
            }
            axiosSecure.post("/carts", cartItem)
                .then(data => {
                    console.log(data.data)
                    if (data.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} has been added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        refetch()
                    }
                })
                .catch(err => { console.log(err) })
        }
        else {
            Swal.fire({
                title: "Are you not Logged In?",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to login page
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card bg-[#F3F3F3] shadow-xl">
                <figure className="relative">
                    <img src={image}
                        alt="Shoes"
                        className="rounded-xl w-full h-[250px]" />
                </figure>
                <p className="bg-[#111827] text-white absolute font-bold right-5 top-5 w-16 text-center">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>{recipe.length > 20 ? recipe.slice(0, 80) + "..." : recipe}</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddtoCart(item)} className="btn bg-[#F3F3F3] text-[#BB8506] border-0 border-b-2 border-[#BB8506] uppercase text-xl">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
