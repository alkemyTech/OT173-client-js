import HelloUser from '../HelloUser/HelloUser';
import Carousel from '../carousel/Carousel';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <Carousel />
      <HelloUser username={undefined} />
      <Footer />
    </>
  );
};

export default Home;
