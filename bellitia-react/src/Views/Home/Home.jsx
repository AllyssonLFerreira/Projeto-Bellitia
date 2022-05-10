import React from 'react';
import HeaderHome from './HeaderHome';
import Footer from '../../Components/Cards/Footer';
import Banner from '../../Components/Banner/Banner';
import HomeInfo from './HomeInfo';
import styles from '../Views.module.css'

const Home = () => (
        <div className={styles.main}>
                <HeaderHome />
                <Banner />
                <HomeInfo />
                <Footer />
        </div>
)

export default Home;