import { NewUserForm } from "./form";
import Header from "../../../Components/Cards/Header";
import Footer from "../../../Components/Cards/Footer"

export const NewUser = () => {
    return (
        <div>
            <Header />
            <NewUserForm />
            <Footer />
        </div>
    );
}