import { NewUserForm } from "./form";
import Header from "../../../Components/Cards/Header";
import Footer from "../../../Components/Cards/Footer";
import styles from "../../Views.module.css";

export const NewUser = () => {
    return (
        <div className={styles.main}>
            <Header />
            <NewUserForm />
            <Footer />
        </div>
    );
}