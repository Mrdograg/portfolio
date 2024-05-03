import React from "react";
import './skills.css';
import Hero from "../../assets/hero.png";

const Skills = () =>{
    return(
 <section id="skills">
         <div className="headline"></div>
    <span className="skillTitle">About Me</span>
    <br/>
    <span className="skillDesc">I'm a full stack developer with a Bachelor's degree in Computer Application(BCA) and a passion for backend technologies. I have completed an intensive 8-month course with UpGrad, where I learned and applied Java, data structures and algorithms, and web development using the MERN stack (MongoDB, Express, React, Node.js).<br/>I have also gained valuable industry experience and skills through two internships as a Java programmer at CodSoft and a Java developer at Oasis Infobyte, where I contributed to efficient codebases and enhanced problem-solving abilities through algorithmic challenges. I'm eager to leverage my expertise in a dynamic company where I can collaborate, learn, and grow alongside a talented team. I'm excited about the opportunity to tackle challenging projects and make meaningful contributions to the organization's success.</span>
    <br/> <br/><span className="hobbies">{'->'} Hobbies {'<-'}</span><br/>
     <span className="hobbiesDesc">Beyond the world of coding, I find joy in the simplicity of life. In my free time, you'll often find me enjoying the tranquility of swimming, immersing myself in captivating movies and series, and cherishing moments spent with my close circle.</span>
     <br/><br/><span className="skillDesc1">|| Let's connect and explore the possibilities together! ||</span>
     <div className="skillBar"></div>
     <img src={Hero} alt="" className="skillBarImg" /> 
 </section>
    );
}

export default Skills;