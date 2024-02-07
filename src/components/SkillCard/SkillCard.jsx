import "./SkillCard.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { SiTensorflow, SiPytorch, SiKeras } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const SkillCard = ({ title, tags, points, image }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="skill-card" data-aos="fade-up" data-aos-duration="800">
      <div className="skill-card__image" data-aos="zoom-in" data-aos-delay="300">
        <img src={image} alt={title} />
      </div>
      <div className="skill-card__content">
        <div className="title" data-aos="fade-up" data-aos-delay="300">
          <h2>{title}</h2>
          <div className="icons" data-aos="zoom-in" data-aos-delay="400">
            <SiTensorflow size="30" />
            <FaPython size="30" />
            <SiPytorch size="30" />
            <SiKeras size="30" />
          </div>
        </div>
        <div className="content">
          <ul className="skill-card__points" data-aos="fade-right" data-aos-delay="500">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className="tags" data-aos="flip-up" data-aos-delay="600">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
};

export default SkillCard;
