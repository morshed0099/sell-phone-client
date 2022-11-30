import React, { useContext } from 'react';
import GoogleButton from 'react-google-button';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userAuth } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {loginEmail,signWithGoogle}=useContext(userAuth)
    const location=useLocation()
    const from =location.state?.form?.pathname || "/"
    const navigate=useNavigate()
    const haldelLogin=(event)=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value;
        const password=form.password.value;
        loginEmail(email,password)
        .then(result=>{
            const user =result.user
            console.log(user)
            toast.success('user login succesfully')
            navigate(from,{replace:true})
        }).catch(error=>{
            console.error(error)
            toast.error(error.message);
        })}

    
      const googleSingUp=(event)=>{
        event.preventDefault()
        signWithGoogle()
        .then(result=>{
            const user=result.user  
            const userRoll="seller"
            createUser(userRoll,user.userName,user.photoURL,user.email,user.password) 
            toast.success('login succesfully')          
            navigate(from,{replace:true})      
         }).catch(error=>{        
            console.error(error)
            toast.error(error.message)
        }
         )
      } 
       
      const createUser=(userRoll,userName,photoURL,email,password)=>{   
        const userInfo ={
            userRoll,
            userName,  
            photoURL,  
            email,
            password,
            status:false,
           }  
        const user=userInfo
        console.log(user)
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(user),
        }).then(res=>res.json())
        .then(data=>{
            console.log(data.message);
            if(data.acknowledged){
             toast.success('user create sucessfully')             
            }else{ 
                toast.success('login success')               
                }
             })    
    } 

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={haldelLogin}>
                        <div className="card-body">
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
                                    <Link  to='/reset' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <GoogleButton onClick={googleSingUp} className='mx-auto  mb-3 rounded-full'></GoogleButton>
                </div>
            </div>
        </div>
    );
};

export default Login;