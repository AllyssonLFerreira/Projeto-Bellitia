import React from 'react';
import HeaderHome from './HeaderHome';
import Footer from '../Views/Footer';
import Banner from '../Banner/Banner';
import HomeInfo from './HomeInfo';

const Home = () => (
        <div>
         <HeaderHome />
         <Banner />
         <HomeInfo />
         <Footer />
        </div>
)

export default Home;