import HelloUser from '../HelloUser/HelloUser';
import Carousel from '../carousel/Carousel';
import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector(state => state.user);
  return (
    <>
      <Carousel />
      <HelloUser username={user ? user.firstName : 'Guest'} />
    </>
  );
};

export default Home;
