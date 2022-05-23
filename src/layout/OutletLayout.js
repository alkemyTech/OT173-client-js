import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { HeaderLinks } from '../constants/HeaderLinks-Home';
import PageTransition from '../components/PageTransition/PageTransition';

const OutletLayout = () => {

    return (
        <PageTransition>
            <Header
                logo={'/images/assets/logo1.png'}
                menu={HeaderLinks}
                buttons={true}
            />
            <Outlet />
        </PageTransition>
    )
}

export default OutletLayout;
