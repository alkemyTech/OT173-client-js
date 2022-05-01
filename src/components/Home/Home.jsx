import HelloUser from "./presentational/HelloUser/HelloUser"
import News from "./presentational/News/News"
import Testimonials from "./presentational/Testimonials/Testimonials"
import Header from "../Header/Header"
import Carousel from "../carousel/Carousel"
import Footer from "../Footer/Footer"
import { HeaderLinks } from "../../constants/HeaderLinks-Home"
const Home = () => {
  return (
    <>
      <Header logo={"/images/assets/logo1.png"} menu={HeaderLinks}/>
      <Carousel/>
      <HelloUser/>
      <News/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home