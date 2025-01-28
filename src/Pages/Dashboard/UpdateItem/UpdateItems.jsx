
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItems = () => {
    const item = useLoaderData()
    const { register, handleSubmit} = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    console.log(item.data)

    const onSubmit = async (data) => {
        console.log(data)

        // const imageFile = { image: data.image[0] }
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })

        // if (res.data.success) {
        //     const menuItem = {
        //         name: data.name,
        //         category: data.category,
        //         price: parseFloat(data.price),
        //         recipe: data.recipe,
        //         image: res.data.data.display_url
        //     }

        //     const menuRes = axiosSecure.patch(`/menu/${item._id}`, menuItem)
        //     console.log(menuRes.data)
        // }

        // return res.data

    }

    return (
        <div>
            <Helmet>
                <title>Update Item || Dashboard</title>
            </Helmet>

            <SectionTitle
                heading="Update an Items"
                subheading="Item data informations"
            ></SectionTitle>


            <div className="m-8 bg-gray-200 p-10 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recipe Name*</span>
                            </label>
                            <input type="text" defaultValue={item.name} placeholder="Recipe name" {...register('name', { required: true })} required className="input input-bordered w-full" />
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

export default UpdateItems;