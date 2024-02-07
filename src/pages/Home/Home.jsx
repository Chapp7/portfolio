import { Footer, Navbar } from "../../containers";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="landing-page">
          <div className="header-content">
            <h1>Experienced Web Developer</h1>
            <h2>Creating Innovative Solutions</h2>
            <small>
              Welcome to my website portfolio. I specialize in creating visually
              stunning and user-friendly websites that drive results.
            </small>
            <div className="buttons">
              <button className="contact-me">Contact Me</button>
            </div>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
