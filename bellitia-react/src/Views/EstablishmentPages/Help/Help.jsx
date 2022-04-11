import React from 'react';
import styles from '../../viewProp.module.css'
import Header from '../../../Components/Cards/Header';
import Footer from '../../../Components/Cards/Footer';
import BarraLateral from '../../../Components/Cards/Barra-Lateral';
import { HelpForm } from './HelpForm';

export const Help = () => {
    return (
        <div className={styles.main}>
            <Header />
        <div className={styles.grid_flex}>
            <BarraLateral />
            <HelpForm />
        </div>
            <Footer />
        </div>
    )
};
