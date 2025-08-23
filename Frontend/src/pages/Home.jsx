import FeaturedBooks from "../components/FeaturedBooks.jsx"
import Footer from "../components/Footer.jsx"
import Hero from "../components/Hero.jsx"
import Navbar from "../components/Navbar.jsx"


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <FeaturedBooks/> 
      <Footer/>
    </>
  )
}

export default Home