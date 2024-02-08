import "./About.scss";
import profile from "../../assets/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="about-section">
      <div className="about-section__image" data-aos="fade-right">
        <img src={profile} alt="about" />
      </div>
      <div className="about-section__content" data-aos="fade-left">
        <h1>About Me</h1>
        <h2>Web Design That Makes an Impact</h2>
        <p>
          I have a strong background in web design and a passion for creating
          visually stunning and user-friendly websites. With a focus on clean
          and modern design, I strive to create websites that not only impress
          but also engage visitors. Whether it&apos;s a personal portfolio or an
          e-commerce site, I believe in the power of good design to elevate the
          user experience and drive results. Les work together to bring your
          vision to life.
        </p>
      </div>
    </div>
  );
};

export default About;
