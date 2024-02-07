import "./Hero.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="landing-page">
      <div className="header-content" data-aos="fade-down">
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
  );
};

export default Hero;
