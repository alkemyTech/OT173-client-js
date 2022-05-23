import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import PageTransition from '../components/PageTransition/PageTransition';

const OutletLayoutSecondary = () => {

    return (
        <PageTransition>
            <Header
                logo={'/images/assets/logo1.png'}
                menu={[]}
            />
            <Outlet />
        </PageTransition>
    )

}

export default OutletLayoutSecondary