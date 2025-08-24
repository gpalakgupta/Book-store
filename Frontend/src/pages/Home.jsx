import Hero from "../components/Hero.jsx";
import FeaturedBooks from "../components/FeaturedBooks.jsx";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="books">
        <FeaturedBooks />
      </section>
    </>
  );
};

export default Home;
