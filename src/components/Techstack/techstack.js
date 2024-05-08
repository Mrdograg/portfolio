import React from "react";
import './techstack.css';
import '../Skills/skills.css';
import img1 from "../../assets/portfolio-3.png";

const Techstack =()=>{
    return(
   <section id="techStack">
    <div className="headline"></div>
    <span className="techStackTitle">&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skills</span>
    <span className="techStackskillDes">&nbsp;&nbsp;&nbsp;Tech-Skills</span>
   <span className="techStackDesc"><span className="Arrow">&nbsp;&nbsp;&nbsp;•Languages: -</span> C, C++, JavaScript, Core Java, HTML5, CSS, Data Structures - Algorithms (DSA) and Object Oriented Programming &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Oops).
<br/><span className="Arrow">&nbsp;&nbsp;&nbsp;•Backend: -</span> Spring Boot, Node.JS, Express.JS, Rest APIs, Postman.
<br/><span className="Arrow">&nbsp;&nbsp;&nbsp;•Frontend: -</span> React.JS, Bootstrap, Tailwind.
<br/><span className="Arrow">&nbsp;&nbsp;&nbsp;•Database: -</span> NoSQL- MongoDB, PostgreSQL, SQL.
<br/><span className="Arrow">&nbsp;&nbsp;&nbsp;•Version Control: -</span> Git, GitHub.</span> <br/><br/>
<span className="techStackskillDes">&nbsp;&nbsp;&nbsp;Soft-Skills</span>
<span className="techStackDesc">&nbsp;&nbsp;&nbsp;•Analytical thinker with problem-solving skills.
<br/>&nbsp;&nbsp;&nbsp;•Team-Management and Leadership.
<br/>&nbsp;&nbsp;&nbsp;•Adept at adapting communication styles to suit various audiences and project requirements.
<br/>&nbsp;&nbsp;&nbsp;•Demonstrated ability to communicate technical concepts clearly and collaborate effectively across diverse teams.
<br/>&nbsp;&nbsp;&nbsp;•Excellent communication and collaboration skills.</span>
<div className="techStackBar"></div>
<span className="techStackImg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><img src={img1} alt="" className="techStackImg" /> 
   </section>
    )
}

export default Techstack;
