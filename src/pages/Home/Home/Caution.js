import React from 'react';
import FeadbackCarusal from '../FeadbackCarusal';

const Caution = () => {
    return (
        <>
            <div className='max-w-[1400px] mx-auto my-8 rounded-2xl shadow-md bg-white'>
                <div className="w-full  justify-center rounded-2xl shadow">
                    <div>
                        <h1 className='text-center font-bold text-3xl lg:mt-8 mt-4 lg:mb-6 mb-3'>
                            Your Feadback
                        </h1>
                    </div>
                    <div className="hero ">
                        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                            <div className="text-center ml-7 lg:text-left">
                                <h1 className="text-2xl font-bold">Give your feadback!</h1>
                                <p className="py-6">send your openion for our developmet and stay conencted </p>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm border border-gray-200 ">
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
            </div>

            <div className='max-w-[1400px] lg:mb-8 mb-6 border mx-auto shadow-md bg-white rounded-2xl'>
                <h1 className='text-3xl lg:mt-14 mt-6  lg:mb-2 mb-3 font-bold text-center text-black'>Customer Feadback</h1>
                <FeadbackCarusal></FeadbackCarusal>
            </div>
            <h1 className='text-2xl ml-3 font-bold text-center'>Cution</h1>
            <div className=' mt-6 grid border rounded-2xl shadow-md max-w-[1400px]  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 p-3 mx-auto text-indigo-600 font-semibold text-1xl '>

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