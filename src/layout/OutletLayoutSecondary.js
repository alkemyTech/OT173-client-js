import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import PageTransition from '../components/PageTransition/PageTransition';

const OutletLayoutSecondary = () => {
  return (
    <>
      <Header logo={'/images/assets/logo1.png'} menu={[]} />
      <PageTransition>
        <Outlet />
      </PageTransition>
    </>
  );
};

export default OutletLayoutSecondary;
