import React from 'react';
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom';

const SingupFrom = ({ accaunts }) => {
    console.log(accaunts);
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">{accaunts}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="file" placeholder="your photo" className="input input-bordered"/>
                             </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
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
                      <GoogleButton className='mx-auto  mb-3 rounded-full'></GoogleButton>
                </div>
            </div>
        </div>
    );
};

export default SingupFrom;