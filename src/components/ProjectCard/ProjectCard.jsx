import "./ProjectCard.scss";
import PropTypes from "prop-types";

const ProjectCard = ({ title, description, tags, aosAnimation }) => {
  return (
    <div className="project-card" data-aos={aosAnimation}>
      <div className="project-card__image">
        <img src="https://via.placeholder.com/500" alt="project" />
      </div>
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-card__tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-card__buttons">
        <button className="project-card__button">View project</button>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  aosAnimation: PropTypes.string,
};

export default ProjectCard;
