import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FeadbackCarusal = () => {
    var settings = {
        dots: true,
      infinite: true,
      slidesToShow: 3,
      pauseOnHover: true,
      slidesToScroll: 2,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='p-8' >
            
            <Slider {...settings}>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>                
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl p-4'>
                    <div className='rounded-2xl p-2 border border-gray-300'>
                        <div className='felx justify-between rounded-md bg-gray-300 p-2 '>
                            <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/R.9f4c2a8dccb94e8c9264c9d0a4a40144?rik=mjE1bQn5Ke3l1A&riu=http%3a%2f%2fwww.vector-eps.com%2fwp-content%2fgallery%2fpeople-icons-in-vector-format%2fpeople-icon-in-vector-format2.jpg&ehk=5W9nSyfIwY1FsrXvflcFt0ftAK4eU5p3P%2foi%2bwTi0Bc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                            <p>Name: MD.Anisul Haque</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum laborum blanditiis dignissimos! Quasi ea officia corrupti iusto cum perspiciatis.</p>
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 '>
                            <p> 4 start</p>
                        </div>
                    </div>
                </div>                
            </Slider>
        </div>
    );
}

export default FeadbackCarusal;