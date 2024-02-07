import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.scss";
import { ProjectCard } from "../../components";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const projectList = [
    {
      title: "Project One",
      description: "Browse through a selection of my featured design projects.",
      tags: ["Web", "UI", "Responsive"],
    },
    {
      title: "Project Two",
      description: "Get inspired by my design work.",
      tags: ["Graphic", "Print", "Branding"],
    },
  ];

  return (
    <div className="projects-wrapper">
      <div className="projects__heading" data-aos="fade-right">
        <h2>Featured Design Projects</h2>
        <p>Explore my design capabilities with these projects.</p>
      </div>
      <div className="projects__list">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            aosAnimation={index % 2 === 0 ? "fade-left" : "fade-right"}
          />
        ))}
      </div>
      <div className="projects__buttons" data-aos="fade-right">
        <button className="projects__button">View all projects</button>
      </div>
    </div>
  );
};

export default Projects;
