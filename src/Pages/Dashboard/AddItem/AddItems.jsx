import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log(data)

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image: res.data.data.display_url,
                category: data.category
            }

            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // successfull popup message show
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        console.log(res.data.data)

    };

    return (
        <div>

            <Helmet>
                <title>Add Items || Dashboard</title>
            </Helmet>

            <SectionTitle
                subheading="--- Add an items ---"
                heading="What's new?"
            ></SectionTitle>


            <div className='flex justify-evenly my-4'>
                <h3 className="text-3xl">Add Items</h3>
                <h3 className='text-3xl'>Total Items</h3>
            </div>

            <div className="m-8 bg-gray-200 p-10 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recipe Name*</span>
                            </label>
                            <input type="text" placeholder="Recipe name" {...register('name', { required: true })} required className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        {/* category  */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>


                        {/* price  */}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>

                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recepi details"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>


                    <button className="btn btn-primary">
                        Add Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AddItems;