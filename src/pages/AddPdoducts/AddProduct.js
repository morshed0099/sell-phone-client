import React, { useContext, useState } from 'react';
import { userAuth } from '../../AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(userAuth)
    const[selectOption,setSelctOption]=useState('')

    const handel=(event)=>{
        setSelctOption(event.target.value)
    }
    const handelProduct=(event)=>{
    event.preventDefault();
    const form=event.target
    const produnctName=form.produnctName.value
    const image=form.image.files[0]
    const email=form.email.value;    
    console.log(produnctName,image,email,selectOption);
    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center  sticky top-14 hidden md:block  -mt-12">
                    <h1 className="text-4xl font-bold ">wellcome <span className='text-orange-600'> {user?.displayName}</span></h1>
                    <h1 className="text-3xl font-bold ">Add Your Product</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelProduct}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="produnctName" type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input name="image" type="file" placeholder="pdoduct image" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' defaultValue={user?.email}readOnly type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select onChange={handel} className="select select-bordered w-full">                                   
                                    <option value='han solo'>Han Solo</option>                                    
                                    <option value='khan solo'>khan Solo</option>                                    
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Old price</span>
                                </label>
                                <input name='oldprice' type="number" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New Price</span>
                                </label>
                                <input name='newPrice' type="number" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">condition</span>
                                </label>
                                <input name='condition' type="number" placeholder="how many time used" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">details</span>
                                </label>
                                <textarea name='details' className="textarea textarea-bordered" placeholder="details about product"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button value='submit' className="btn btn-primary">save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;