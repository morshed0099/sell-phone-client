import React, { useContext } from 'react';
import GoogleButton from 'react-google-button'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { userAuth } from '../../AuthProvider/AuthProvider';

const SingupFrom = ({ accaunts, roll }) => {
    const { createUserEmail, updateUserInfo } = useContext(userAuth)
    const handelSignup = (event) => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const image = form.photoURL.files[0];
        const email = form.email.value;
        const password = form.password.value;
        const formData = new FormData()
        formData.append('image', image);
        console.log(formData);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_KEY}`
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const photoURL = data.data.display_url
                const userUpdateData = {
                    displayName: userName,
                    photoURL: photoURL,

                }
                createUserEmail(email, password)
                    .then(result => {
                        const user = result.user
                        console.log(user, userUpdateData);
                        updateUserInfo(userUpdateData)
                            .then(() => {
                                console.log('update user ')
                                form.reset();
                            }).catch(error => console.error(error))
                    })
                    .catch(error => {
                        console.error(error)
                        toast.error(error.message)
                    })
            })



    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">{accaunts}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSignup}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input name="photoURL" type="file" placeholder="your photo" className="input input-bordered" />
                            </div>
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
                                <button value='submit' className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <GoogleButton className='mx-auto  mb-3 rounded-full'></GoogleButton>
                </div>
            </div>
        </div>
    );
};

export default SingupFrom;