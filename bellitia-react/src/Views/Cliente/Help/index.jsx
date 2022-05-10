import BarraLateralCliente from '../../../Components/Cards/Barra-Lateral-Cliente';
import Footer from '../../../Components/Cards/Footer';
import Header from '../../../Components/Cards/Header';
import { FormHelp } from './Form';
import styles from '../../Views.module.css';

export const UserHelp = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.grid_flex}>
        <BarraLateralCliente />
        <FormHelp />
      </div>
      <Footer />
    </div>
  )
};