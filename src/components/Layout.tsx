import {Outlet} from "react-router-dom";
import HeaderSearch from "./HeaderSearch";


const Layout = () => {
    return(
        <>
            <HeaderSearch/>
            <Outlet/>
        </>
    )
}
export default Layout