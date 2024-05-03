import React from "react";
import "./project.css";
import P1 from "../../assets/project1.png";
import P2 from "../../assets/project2.png";
import P3 from "../../assets/project3.png";
import P4 from "../../assets/project4.png";


const Project =()=>{
    return(
 <section id="project">
     <div className="headline"></div>
     <span className="projectTitle">Projects</span><br/>
     <span className="projectDesc">Discover my portfolio, revealing a spectrum of projects spanning frontend and backend development. Engage with interactive &nbsp; &nbsp; &nbsp; &nbsp;web applications crafted using HTML, CSS, JavaScript, and React for dynamic user experiences. Explore the depths of &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;development, where I've employed Java, Node.js, Express.js, Databases, and Data Structures & Algorithms to unearth insights from intricate datasets. Each project embodies my commitment to excellence, showcasing expertise and creativity across diverse domains.</span><br/>
<div className="projectBars">
        <div className="projectBar">
            <img src={P1} alt="project1" className="projectBarImg" />
            <div className="projectBarText">
            <a className="projHead" href="https://github.com/Mrdograg/eshop-amitdogra"><h2>Ecommerce WebApplication</h2></a>
              <p>A dynamic e-commerce platform developed using React for frontend, HTML and CSS for responsive design, and NodeJS with MongoDB
for robust backend functionality. Leveraging RESTful APIs for seamless integration.</p>
            </div>
        </div>
        <div className="projectBar">
            <img src={P2} alt="project2" className="projectBarImg" />
            <div className="projectBarText">
            <a className="projHead" href="https://github.com/Mrdograg/movie-booking-app"><h2>Movie Booking WebApplication</h2></a>
              <p>The movie booking app uses React, HTML, and CSS for an intuitive frontend. Express, Node.js, and MongoDB power the backend,
handling server operations and data storage, creating a seamless booking experience.</p>
            </div>
        </div>
        <div className="projectBar">
            <img src={P3} alt="project3" className="projectBarImg" />
            <div className="projectBarText">
            <a className="projHead" href="https://github.com/Mrdograg/Discussion-Forum"><h2>Disscussion Forum</h2></a>
              <p>A sophisticated discussion forum crafted with Java, SpringBoot, implementing Data Structures and Algorithms (DSA), and Object Oriented
Programming (OOP) principles.</p>
            </div>
        </div>
        <div className="projectBar">
            <img src={P4} alt="project4" className="projectBarImg" />
            <div className="projectBarText">
            <a className="projHead" href="https://github.com/Mrdograg/Bloggers-Website-Amit-Dogra"><h2>Bloggers Website</h2></a>
              <p>Experience a vibrant bloggers' hub crafted with HTML, CSS, and JavaScript. Seamlessly navigate through captivating content, engaging designs, and interactive features. Dive into a world of creativity and expression on this dynamic platform.</p>
            </div>
        </div>
     </div>
     <br/><a className="seeMore" href="https://github.com/Mrdograg?tab=repositories">See more</a>
     <br/>
     <br/>
 </section>
    );
}

export default Project;