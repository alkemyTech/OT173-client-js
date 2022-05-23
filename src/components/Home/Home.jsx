import HelloUser from '../HelloUser/HelloUser';
import Carousel from '../carousel/Carousel';

const Home = () => {
  return (
    <>
      <Carousel />
      <HelloUser username={undefined} />
    </>
  );
};

export default Home;
