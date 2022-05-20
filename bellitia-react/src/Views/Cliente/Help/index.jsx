import BarraLateralCliente from '../../../Components/Cards/NavBarClient';
import Footer from '../../../Components/Cards/Footer';
import Header from '../../../Components/Cards/Header';
import { HelpForm } from '../../../Components/Help/Form';
import styles from '../../Views.module.css';

export const UserHelp = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.grid_flex}>
        <BarraLateralCliente />
        <HelpForm />
      </div>
      <Footer />
    </div>
  )
};