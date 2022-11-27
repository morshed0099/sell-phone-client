import React from 'react';
import Carosel from '../../../Shered/Carosel/Carosel';
import Allcategory from '../Allcategory';
import FeauturePoducts from '../FeauturePoducts';

const Home = () => {
    return (
        <div>
           
            <Carosel></Carosel>
            <Allcategory></Allcategory>
            <FeauturePoducts></FeauturePoducts>
        </div>
    );
};

export default Home;