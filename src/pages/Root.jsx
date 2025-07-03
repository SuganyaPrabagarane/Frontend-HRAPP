import Header from './Header/Header';
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";

const Persons = () =>{
    return(
        <>
        <Header logo='Helsinki Business College'/>
        <main>
        <Outlet />
        </main>
        <Footer year='HBC 2025K'/>
        </>
    )
}

export default Persons;