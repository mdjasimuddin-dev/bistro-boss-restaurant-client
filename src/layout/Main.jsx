import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import { useLocation } from "react-router-dom";


const Main = () => {

    const location = useLocation()
    let noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')

    return (
        <div>
            {noHeaderFooter || <Navbar/>}
            <Outlet/>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;