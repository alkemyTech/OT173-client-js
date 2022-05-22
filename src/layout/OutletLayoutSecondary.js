import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const OutletLayoutSecondary = () => {

    return (
        <>
            <Header
                logo={'/images/assets/logo1.png'}
                menu={[]}
            />
            <Outlet />
        </>
    )

}

export default OutletLayoutSecondary