import {Outlet} from "react-router-dom";
import HeaderSearch from "./HeaderComponent/HeaderSearch";


const Layout = () => {
    return(
        <>
            <HeaderSearch/>
            <Outlet/>
        </>
    )
}
export default Layout