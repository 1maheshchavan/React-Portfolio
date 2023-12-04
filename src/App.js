import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Componenet/Nav';
import Home from './Componenet/Home';
import AboutMe from './Componenet/About';
import Skills from './Componenet/Skills';
import ProfessionalExperience from './Componenet/ProfessionalExperience';
import Certified from './Componenet/Certified';
import Education from './Componenet/Education';
import Project from './Componenet/Project';
import Contact from './Componenet/Contact';
import Footer from './Componenet/Footer';
import './Componenet/Style/AllCss.css'

function App() {
  return (
    <>
    <Nav/>
    <Home/>
    <AboutMe/>
    <Skills/>
    <ProfessionalExperience/>
    <Certified/>
    <Education/>
    <Project/>
    <Contact/>
    <Footer/>
    <bootstrap/>
    
    </>
  );
}

export default App;