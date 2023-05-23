import React from 'react';
import Carosel from '../../../Shered/Carosel/Carosel';
import Allcategory from '../Allcategory';
import FeauturePoducts from '../FeauturePoducts';
import Caution from './Caution';



const Home = () => {
    return (
        <div>

            <Carosel></Carosel>
            <div className='px-4'>
                <Allcategory></Allcategory>
            </div>
            <div className='px-4'>
                <FeauturePoducts></FeauturePoducts>
            </div>
            <div className='px-4'>
                <Caution></Caution>
            </div>

        </div>
    );
};

export default Home;