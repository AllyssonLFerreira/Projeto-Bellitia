import styles from '../../Views.module.css';
import Header from '../../../Components/Cards/Header';
import Footer from '../../../Components/Cards/Footer';
import { FormAddress } from '../../../Components/Forms/Address/form';

export const EstAddress = () => {
  return (
    <div className={styles.main}>
      <Header />
      <FormAddress />
      <Footer />
    </div>
  )
}