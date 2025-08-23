import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FeaturedBooks from "../components/FeaturedBooks.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="books">
        <FeaturedBooks />
      </section>
      <Footer />
       
    </>
  );
};

export default Home;
