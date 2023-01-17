import React, { useContext } from 'react';
import GoogleButton from 'react-google-button';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userAuth } from '../../AuthProvider/AuthProvider';
import logImage from '../../meida/animation_500_lcvnx1pr.gif'

const Login = () => {
    const { loginEmail, signWithGoogle } = useContext(userAuth)
    let navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const haldelLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        loginEmail(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                getUsertoken(user?.email)

                toast.success('user login succesfully')
            }).catch(error => {
                console.error(error)
                toast.error(error.message);
            })
    }


    const googleSingUp = (event) => {
        event.preventDefault()
        signWithGoogle()
            .then(result => {
                const user = result.user
                const userRoll = "buyer"
                createUser(userRoll, user?.userName, user?.photoURL, user?.email, user?.password)
                getUsertoken(user?.email)
                toast.success('login succesfully')


            }).catch(error => {
                console.error(error)
                toast.error(error.message)
            }
            )
    }

    const createUser = (userRoll, userName, photoURL, email, password) => {
        const userInfo = {
            userRoll,
            userName,
            photoURL,
            email,
            password,
            status: false,
        }
        const user = userInfo
        console.log(user)
        fetch('https://sell-phones-server-morshed0099.vercel.app/users', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        }).then(res => res.json())
            .then(data => {
                console.log(data.message);
                if (data.acknowledged) {
                    toast.success('user create sucessfully')
                } else {
                    toast.success('login success')
                }
            })
    }
    const getUsertoken = email => {
        fetch(`https://sell-phones-server-morshed0099.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    navigate(from, { replace: true });

                }
            })
    }
    return (
        <div>
            <div className='text-black text-1xl font-bold flex gap-4 justify-center bg-gray-300 rounded-md p-4  '>
                <div className='border-black border p-4 rounded-md'>
                    <p>Seller Email: seller22@gmail.com</p>
                    <p>Seller password:123456</p>
                </div>
                <div className='border-black border p-4 rounded-md'>
                    <p>Buyer Email: buyer13@gmail.com</p>
                    <p>Buyer password:123456</p>
                </div>
                <div className='border-black border p-4 rounded-md'>
                    <p>admin: admin@gmail.com</p>
                    <p>admin password:123456789</p>
                </div>

            </div>
            <div className=' mx-8 my-6 p-8 shadow-xl bg-base-200 rounded-2xl'>
                <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ">
                    <div className="border bg-base-200 rounded-2xl p-6 border-grey">
                        <h1 className='text-3xl  font-bold text-center'>Login</h1>
                        <form onSubmit={haldelLogin}>
                            <div className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to='/reset' className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>

                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className='pb-2'>
                            <span >are you new ? go to <Link className='text-1xl font-bold text-orange-600 ' to="/signup">SignUp</Link></span>
                        </div>
                        <GoogleButton onClick={googleSingUp} className='mx-auto mb-[-4] rounded-full'></GoogleButton>
                    </div>
                    <div className='hidden md:block rounded-2xl'>
                        <img src={logImage} className='rounded-2xl' alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;