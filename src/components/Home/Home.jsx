import HelloUser from '../HelloUser/HelloUser';
import Carousel from '../carousel/Carousel';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector(state => state.user);
  return (
    <>
      <Carousel />
      <HelloUser username={user ? user.firstName : 'Guest'} />
      <Footer />
    </>
  );
};

export default Home;
