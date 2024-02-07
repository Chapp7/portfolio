import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CareerTimeline.scss";

const CareerTimeline = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const timelineEvents = [
    {
      year: "2017",
      title: "Junior Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    },
    {
      year: "2017",
      title: "Junior Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    },
    {
      year: "2017",
      title: "Junior Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    },
    {
      year: "2017",
      title: "Junior Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    },
  ];

  return (
    <div className="career-timeline-wrapper">
      <div className="career-timeline__header" data-aos="fade-right">
        <h2>My Career Timeline</h2>
      </div>
      <div className="career-timeline">
        <div
          className="timeline-line"
          data-aos="grow-up"
          data-aos-delay="300"
        ></div>
        {timelineEvents.map((event, index) => (
          <div
            className="timeline-item"
            key={index}
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <div className="timeline-date">{event.year}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
