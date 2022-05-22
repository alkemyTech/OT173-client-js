import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { HeaderLinks } from '../constants/HeaderLinks-Home';

const OutletLayout = () => {

    return (
        <>
            <Header
                logo={'/images/assets/logo1.png'}
                menu={HeaderLinks}
                buttons={true}
            />
            <Outlet />
        </>
    )

}

export default OutletLayout