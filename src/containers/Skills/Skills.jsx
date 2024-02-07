import "./Skills.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SkillCard } from "../../components";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillsList = [
    {
      title: "Skill One",
      tags: ["Web", "UI", "Responsive"],
      points: ["Point One", "Point Two", "Point Three"],
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Skill Two",
      tags: ["Graphic", "Print", "Branding"],
      points: ["Point One", "Point Two", "Point Three"],
      image: "https://via.placeholder.com/400",
    },
  ];

  return (
    <div className="skills-wrapper">
      <div className="skills__heading">
        <h2>Skills</h2>
        <p>Explore my technical skills and capabilities.</p>
      </div>
      <div className="skills__list">
        {skillsList.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            tags={skill.tags}
            points={skill.points}
            image={skill.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
