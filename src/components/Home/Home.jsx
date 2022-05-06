import HelloUser from '../HelloUser/HelloUser';
import News from '../News/News';
import Header from '../Header/Header';
import Carousel from '../carousel/Carousel';
import Footer from '../Footer/Footer';
import { HeaderLinks } from '../../constants/HeaderLinks-Home';

const Home = () => {
  return (
    <>
      <Header logo={'/images/assets/logo1.png'} menu={HeaderLinks} />
      <Carousel />
      <HelloUser username={undefined} />
      <News />
      <Footer />
    </>
  );
};

export default Home;
