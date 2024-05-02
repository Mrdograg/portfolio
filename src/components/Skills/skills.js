import React from "react";
import './skills.css';
import Hero from "../../assets/hero.png";

const Skills = () =>{
    return(
 <section id="skills">
    <span className="skillTitle">About Me</span>
    <br/>
    <span className="skillDesc">Discover the future of web development with RTR, where innovation meets craftsmanship. I harness the power of full-stack technology to create robust, intuitive, and adaptive web solutions. My mission is to transform your challenges into cutting-edge experiences that leave a lasting impact. With over 2 years of industry expertise in technologies like Next.js, React, Node.js, and MongoDB, I'm dedicated to broadening my technical horizons and bringing your visionary projects to life. Let's delve into a partnership that redefines digital excellence. Pushing boundaries is not just a task for me – it's the passion that fuels constant learning and growth. Together, we’ll build a web presence that stands out.</span>
     <div className="skillBar"></div>
     <img src={Hero} alt="" className="skillBarImg" /> 
 </section>
    );
}

export default Skills;