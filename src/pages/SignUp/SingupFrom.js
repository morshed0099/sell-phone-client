// import React, { useContext, useState } from 'react';
import { useContext, useState } from 'react';
import GoogleButton from 'react-google-button'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userAuth } from '../../AuthProvider/AuthProvider';


const SingupFrom = () => {
    const [loader, setLoader] = useState(false)
    const [userRoll,setUerRoll]=useState('buyer')
    const location = useLocation()    
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const [userEmailForToken,setUserEmailForToken]=useState('')
    const { logOut, createUserEmail, updateUserInfo, signWithGoogle } = useContext(userAuth)

      console.log(userEmailForToken,'line 18');
    const handelCatchValue=(event)=>{
       const  roll=event.target.value;
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
                        console.log(user,'line47')
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
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        }).then(res => res.json())
            .then(data => { 
                if (data.acknowledged) {                  
                    toast.success('user create sucessfully') 
                    setUserEmailForToken(user?.email) ; 
                    getUsertoken(user?.email)                
                    setLoader(false)
                } else {
                    logOut()
                    navigate('/login')
                    toast.error('email alredy used please login')
                }
            })
    }
    const getUsertoken=email=>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
         if(data.token){
             localStorage.setItem("token",data.token)
             navigate('/')
         }
        })
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1  className="text-5xl mt-[-200px] sticky top-[100px]  font-bold">Signup now!</h1>
                  
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
                                <input name="photoURL" type="file" placeholder="your photo" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
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
                                <label className="label">
                                    <Link to='/reset' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button value='submit' className="btn btn-primary">{loader === true ? 'Loading....' : 'SingUp'}</button>
                            </div>
                            <span>alredy have and accaunt ? <Link className='text-orange-600 text-1xl font-bold' to='/login'>Login</Link></span>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <GoogleButton onClick={googleSingUp} className='mx-auto  mb-3 rounded-full'></GoogleButton>
                </div>
            </div>
        </div>
    );
};

export default SingupFrom;