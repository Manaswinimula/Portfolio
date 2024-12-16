import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/passport_size_photo.jpg'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5 Projects</small>
            </article>
          </div>
          <p>
          I am a skilled Full Stack Developer with hands-on experience 
          in building and maintaining web applications using a variety 
          of technologies. I have expertise in backend development with 
          SQL Server and C#, and I am proficient in frontend technologies 
          including HTML, CSS, JavaScript, and ReactJS, which allows me to
           create dynamic, responsive user interfaces. With a strong background in Python, I am able to
               integrate diverse functionalities across the application stack.
                I am passionate about writing clean, maintainable code, 
                optimizing performance, and delivering end-to-end solutions
                 that meet user needs and business goals.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
