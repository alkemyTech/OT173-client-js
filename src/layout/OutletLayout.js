import { Outlet } from 'react-router-dom';
import { HeaderLinks } from '../constants/HeaderLinks-Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PageTransition from '../components/PageTransition/PageTransition';

const OutletLayout = () => {
  return (
    <>
      <Header
        logo={'/images/assets/logo1.png'}
        menu={HeaderLinks}
        buttons={true}
      />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  );
};

export default OutletLayout;
