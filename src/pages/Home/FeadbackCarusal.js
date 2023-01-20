import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StarIcon } from '@heroicons/react/24/solid'
const FeadbackCarusal = () => {
    var settings = {
        dots: true,
      infinite: true,
      slidesToShow: 2,
      pauseOnHover: true,
      slidesToScroll: 2,
      
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
        
    };
    return (
        <div className='p-8'>
            
            <Slider {...settings}>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='flex items-center  rounded-md bg-gray-300 p-2 '>
                            <img className='w-14 h-14 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <div className='ml-3'>
                            <p className='font-bold'>Anisul Haque</p>
                            <p>12.30 Jan/23</p>
                            </div>

                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-100 flex rounded-md p-2 '>
                        
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='flex items-center  rounded-md bg-gray-300 p-2 '>
                            <img className='w-14 h-14 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <div className='ml-3'>
                            <p className='font-bold'>Anisul Haque</p>
                            <p>12.30 Jan/23</p>
                            </div>

                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-100 flex rounded-md p-2 '>
                        
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='flex items-center  rounded-md bg-gray-300 p-2 '>
                            <img className='w-14 h-14 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <div className='ml-3'>
                            <p className='font-bold'>Anisul Haque</p>
                            <p>12.30 Jan/23</p>
                            </div>

                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-100 flex rounded-md p-2 '>
                        
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='flex items-center  rounded-md bg-gray-300 p-2 '>
                            <img className='w-14 h-14 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <div className='ml-3'>
                            <p className='font-bold'>Anisul Haque</p>
                            <p>12.30 Jan/23</p>
                            </div>

                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-100 flex rounded-md p-2 '>
                        
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='flex items-center  rounded-md bg-gray-300 p-2 '>
                            <img className='w-14 h-14 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <div className='ml-3'>
                            <p className='font-bold'>Anisul Haque</p>
                            <p>12.30 Jan/23</p>
                            </div>

                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-100 flex rounded-md p-2 '>
                        
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        <StarIcon className="h-6 w-6 text-yellow-500"></StarIcon>
                        </div>
                    </div>
                </div>
                
            </Slider>
        </div>
    );
}

export default FeadbackCarusal;