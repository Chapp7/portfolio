import {
  Footer,
  Navbar,
  Hero,
  About,
  CareerTimeline,
  Projects,
} from "../../containers";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <section className="navbar">
          <Navbar />
        </section>

        <section className="home__hero">
          <Hero />
        </section>

        <section className="home__about">
          <About />
        </section>

        <section className="career-timeline">
          <CareerTimeline />
        </section>

        <section className="projects">
          <Projects />
        </section>

        <section className="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
