import React from 'react';

const Caution = () => {
    return (
        <>
         <div className="stats w-full m-10 mx-auto justify-center shadow">
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Give your feadback!</h1>
                        <p className="py-6">send your openion for our developmet and stay conencted </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">comment</span>
                                </label>
                                <input type="text" placeholder="your comment" className="input input-bordered" />
                                <label className="label">                                  
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
        <h1 className='text-2xl ml-3 font-bold text-orange-600'>Cution</h1>
          <div className=' mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 p-3 mx-auto text-indigo-600 font-semibold text-1xl '>
           
           <div>
           <h1>1. DO NOT CARRY BIG AMONT MONEY </h1>
           <h1>2. SELECT SAVE PALCE FOR DEAL </h1>
          </div>
          <div>
           <h1>3. COLLECT ALL DOCUMETS</h1>
           <h1>4. ANY KIND OF HELP CONTACK US</h1>
          </div>
          <div>
           <h1>5.AFTER SELL PDOCUTS AND BY PRODUC GIVE US FEADBACK</h1>
           <h1>6.WE ARE TOTALY FREE PROVIDE SERVICES TO BUY AND SELL </h1>
          </div>

        </div>
        </>
    );
};

export default Caution;