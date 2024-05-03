import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Techstack from "./components/Techstack/techstack";
import Project from "./components/Project/project";
import Contactme from "./components/Contactme/contactme";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Techstack/>
      <Project/>
      <Contactme/>
    </div>
  );
}

export default App;
