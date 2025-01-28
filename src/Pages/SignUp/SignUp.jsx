import { useContext } from 'react';
import signupCover from '../../assets/login/authentication1.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';

const SignUp = () => {

    const { userCreate } = useContext(AuthContext)
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const onSubmit = (data) => {
        console.log(data)
        userCreate(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, { displayName: data.name, photoURL: data.photoURL })
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(data => {
                                if (data.data.insertedId) {
                                    console.log('user added to the database')
                                    reset()
                                    navigate('/')
                                }
                            })
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // const handleuserCreate = (e) => {
    //     e.preventDefault()
    //     const form = e.target
    //     const user_name = form.user_name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const userData = { user_name, email, password }
    //     console.log(userData)

    //     userCreate(email, password)
    //         .then(result => {
    //             console.log(result.user)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    return (
        <div className="bg-base-200 min-h-screen">
            <div className="flex flex-col md:flex-row-reverse gap-10 p-16">
                <div className="flex flex-col w-1/2 items-center justify-center">
                    <img src={signupCover} alt="" className='' />
                </div>

                <div className="w-1/2">
                    <h1 className="text-5xl text-center font-bold">SignUp</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* <form onSubmit={handleuserCreate} className="card-body"> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Enter your name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("photoURL", { required: true })} type="text" placeholder="Enter user photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">User photo URL is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter user email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 charecter required</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password less then 20 charecter required</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Uppercase 1, special charecter 1, number 1, lowercase 1 charecter must be required!</p>}
                        </div>

                        <button className="btn bg-[#d1a054b3] text-xl text-white">SignUp</button>

                        <div className="form-control mt-6">
                            <div className='text-[#d1a054b3] text-center text-xl space-y-1 mt-1'>
                                <p>have your account? <Link className='text-blue-600 font-bold ml-2' to="/login">Login</Link></p>
                                <p className='text-black'>Or sign in with</p>
                                <SocialLogin />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;