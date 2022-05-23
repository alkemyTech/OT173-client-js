import { Outlet } from 'react-router-dom';

import PageTransition from '../components/PageTransition/PageTransition';

const OutletLayout = () => {
  return (
    <PageTransition>
      <Outlet />
    </PageTransition>
  );
};

export default OutletLayout;
