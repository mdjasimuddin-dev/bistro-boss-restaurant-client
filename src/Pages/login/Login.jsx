import { useContext, useEffect, useRef, useState } from 'react';
import logincover from '../../assets/login/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';

const Login = () => {

    const [disabled, setDisabled] = useState(true)
    const { GoogleSignin, userSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
    console.log("state in the location", location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])



    const captchaRef = useRef(null)
    const handleCaptchaValidate = () => {
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }


    const handleuserSignIn = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        const formData = { email, password }
        console.log(formData)

        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="bg-base-200 min-h-screen">
            <div className="flex flex-col md:flex-row gap-10 p-16">
                <div className="flex flex-col w-1/2 items-center justify-center">
                    <img src={logincover} alt="" className='' />
                </div>

                <div className="w-1/2">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleuserSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter user email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleCaptchaValidate} type='text' ref={captchaRef} placeholder="Enter Recaptcha" className="input input-bordered" />
                        </div>

                        <button disabled={disabled} className="btn bg-[#d1a054b3] text-xl text-white">Login</button>

                        <div className="form-control mt-6">
                            <div className='text-[#d1a054b3] text-center text-xl space-y-1 mt-1'>
                                <p>don't have your account? <Link className='text-blue-600 font-bold ml-2' to="/signup">Sign Up</Link></p>
                                <p className='text-black'>Or signup with</p>

                                <SocialLogin />

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;