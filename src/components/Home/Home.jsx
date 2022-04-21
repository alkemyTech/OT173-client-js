import NavBar from "./presentational/NavBar/NavBar"
import HelloUser from "./presentational/HelloUser/HelloUser"
import News from "./presentational/News/News"
import Testimonials from "./presentational/Testimonials/Testimonials"
import Footer from "./presentational/Footer/Footer"
const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <HelloUser></HelloUser>
      <News></News>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  )
}

export default Home