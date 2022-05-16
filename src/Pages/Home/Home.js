import React from 'react';
import Banner from '../../components/Banner';
import HomeAbout from '../../components/HomeAbout';
import HomeCard from '../../components/HomeCard';
import SectionTwo from '../../components/SectionTwo';

const Home = () => {
    return (
        <div>
            <Banner />
            <SectionTwo />
            <HomeAbout />
            <HomeCard />
        </div>
    );
};

export default Home;