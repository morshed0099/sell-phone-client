import moment from 'moment/moment';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { userAuth } from '../../AuthProvider/AuthProvider';

const AddProduct = () => {     
    const { user,singuser} = useContext(userAuth)
    const [categories,setCategories]=useState([])
    const[selectOption,setSelctOption]=useState('')
    const [loader,setLoader]=useState(false)
    console.log(singuser[0]?.status,'line 11');
 
    const date=new Date()
    const time=moment().format("MMM Do YY")
        
    useEffect(()=>{
        fetch('https://sell-phones-server-morshed0099.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    const handel=(event)=>{
        setSelctOption(event.target.value)
    }
    const handelProduct=(event)=>{
    event.preventDefault();
    setLoader(true)
    const form=event.target
    const produnctName=form.produnctName.value    
    const oldprice=form.oldprice.value;  
    const newPrice=form.newPrice.value;
    const condition=form.condition.value;
    const details=form.details.value
    const age =form.age.value;
    const location=form.location.value
    const image=form.image.files[0]
    const formData = new FormData()
        formData.append('image', image);
        console.log(formData);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_KEY}`
        fetch(url, {
            method: "POST",
            body: formData,
         })
         .then(res=>res.json())
         .then(data=>{
           const imgae_url=(data.data.display_url)
           const product={
            produnctName,
            imgae_url,
           seller:[{"name":user.displayName,"email":user.email,"image":user.photoURL,status:singuser[0]?.status}],
            category_id:selectOption,
            oldprice,
            newPrice,
            condition,
            details,
            age,
            location,
            post_time:[{"date":date, "time":time}]
           }
           addProduct(product,form)
         })   
    }
const addProduct =(product,form)=>{
    fetch('https://sell-phones-server-morshed0099.vercel.app/products',{
        method:"POST",
        headers:{
           "content-type":"application/json"
        },
        body:JSON.stringify(product)
    }).then(res=>res.json())
    .then(data=>{
        if(data.acknowledged){
            toast.success('added product succesfully')
            form.reset()
            setLoader(false)
        }
    })
}

    return (
        <div className="hero p-9">
            <div className="">               
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
                                  <option  selected>select your category</option> 
                                   {
                                    categories?.map((category,i)=><option key={i} value={category._id}>{category.category_name}</option>)
                                   }                              
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Original  price</span>
                                </label>
                                <input name='oldprice' type="number" placeholder="Original price" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ReSale price</span>
                                </label>
                                <input name='newPrice' type="number" placeholder="set price" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">condition</span>
                                </label>
                                <input name='condition' type="text" placeholder="how many time used" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input name='location' type="text" placeholder="how many time used" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ues Time</span>
                                </label>
                                <input name='age' type="text" placeholder="how many time used" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">details</span>
                                </label>
                                <textarea name='details' className="textarea textarea-bordered" placeholder="details about product"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button value='submit' className="btn btn-primary">{loader===true?"Loading...":"Save Product"}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;