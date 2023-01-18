import React from 'react';
import Carosel from '../../../Shered/Carosel/Carosel';
import Allcategory from '../Allcategory';
import FeauturePoducts from '../FeauturePoducts';
import Caution from './Caution';



const Home = () => {
    return (
        <div>
           
            <Carosel></Carosel>
            <Allcategory></Allcategory>
            <FeauturePoducts></FeauturePoducts> 
            <Caution></Caution>
            
        </div>
    );
};

export default Home;