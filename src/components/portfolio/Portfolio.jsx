import "./portfolio.css";

import IMG1 from "../../assets/memorygame.png";
import IMG2 from "../../assets/Trackit.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/project_frontline.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [

    {
      id: 3,
      title: "FrontLine Designs",
      img: IMG4,
      description:
        "A dedicated, standalone web page built for interior designing",
      technologies: "ReactJs | Styled-Components",
      link: "https://frontlinedesign-n-yoim.vercel.app/",
      github: "https://github.com/Manaswinimula/frontlinedesign_n",
    },
    {
      id: 1,
      title: "Memory game with HTML CSS JS",
      img: IMG1,
      description:
        "A Memory game to refresh your mind",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://memory-game-nine-rust.vercel.app/",
      github: "https://github.com/Manaswinimula/MemoryGame",
    },
    {
      id: 2,
      title: "TrackIt",
      img: IMG2,
      description:
        "Expense Tracker app to track daily or monlthy expenses",
      technologies: "HTML | CSS | JavaScript",
      link: "https://track-it-indol-zeta.vercel.app/signup.html",
      github: "https://github.com/Manaswinimula/TrackIt",
    },
    
    
    {
      id: 4,
      title: "Hospital reservation form",
      img: IMG3,
      description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
      technologies: "HTML | CSS | JavaScript",
      link: "https://fs-code-task-two.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/FS-Code-Task",
    },
    {
      id: 5,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Typescript",
      link: "https://jokes-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Joke-App",
    },
    {
      id: 6,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://fs-poster-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
