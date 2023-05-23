// import React, { useContext, useState } from 'react';
import { useContext, useState } from 'react';
import GoogleButton from 'react-google-button'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userAuth } from '../../AuthProvider/AuthProvider';


const SingupFrom = () => {
    const [loader, setLoader] = useState(false)
    const [userRoll, setUerRoll] = useState('buyer')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const [userEmailForToken, setUserEmailForToken] = useState('')
    const { logOut, createUserEmail, updateUserInfo, signWithGoogle } = useContext(userAuth)

    console.log(userEmailForToken, 'line 18');
    const handelCatchValue = (event) => {
        const roll = event.target.value;
        setUerRoll(roll);
    }
    const handelSignup = (event) => {
        setLoader(true)
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const image = form.photoURL.files[0];
        const email = form.email.value;
        const password = form.password.value;
        const formData = new FormData()
        formData.append('image', image);
        console.log(formData,'line 33');
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
                        updateUserInfo(userUpdateData)
                            .then(() => {
                                createUser(userRoll, userName, photoURL, email, password)
                                navigate(from, { replace: true })
                                form.reset();
                            }).catch(error => {
                                console.error(error)
                                toast.error(error.message);
                            })
                    })
                    .catch(error => {
                        console.error(error)
                        toast.error(error.message)
                    })
            })
    }

    const googleSingUp = (event) => {
        event.preventDefault()
        signWithGoogle()
            .then(result => {
                const user = result.user
                createUser(userRoll, user.userName, user.photoURL, user.email, user.password)
                navigate(from, { replace: true })
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
                if (data.acknowledged) {
                    toast.success('user create sucessfully')
                    setUserEmailForToken(user?.email);
                    getUsertoken(user?.email)
                    setLoader(false)
                } else {
                    logOut()
                    navigate('/login')
                    toast.error('email alredy used please login')
                }
            })
    }
    const getUsertoken = email => {
        fetch(`https://sell-phones-server-morshed0099.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem("token", data.token)
                    navigate('/')
                }
            })
    }
    return (
        <div className="w-[85%] border border-grey-dark mx-auto p-4 md:p-10  shadow-2xl bg-base-200 rounded-2xl mt-4 mb-4">
            <form onSubmit={handelSignup}>
                <h1 className='text-center text-3xl font-bold mb-2'>SignUp</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    <div>
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
                            <input name="photoURL" type="file" placeholder="your photo" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                       
                    </div>
                    <div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">are you seller or buyer set </span>
                            </label>
                            <select onBlur={handelCatchValue} className="select select-bordered w-full ">
                                <option disabled selected>Are You Buyer or seller Select ?</option>
                                <option value="seller">seller</option>
                                <option value="buyer">buyer</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-6 md:mt-[37px]">
                            <button value='submit' className="btn btn-primary">{loader === true ? 'Loading....' : 'SingUp'}</button>
                        </div>
                       
                    </div>
                </div>
            </form>
            <div className="divider">OR</div>
            <span>alredy have and accaunt ? <Link className='text-orange-600 text-1xl font-bold' to='/login'>Login</Link></span>
            <GoogleButton onClick={googleSingUp} className='mx-auto  mb-3 rounded-full'></GoogleButton>


        </div >
    );
};

export default SingupFrom;