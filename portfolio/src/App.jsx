import React from 'react'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import EducationExperience from './pages/EducationExperience'
import ProjectsSection from './pages/ProjectsSection'
import SkillsSection from './pages/SkillsSection'
import ContactSection from './pages/ContactSection'
import FooterSection from './pages/FooterSection'
import HomePage from './pages/HomePage'
const App = () => {
  return (
   <div>
    <Navbar/>
    <HomePage/>
    {/* <About/> */}
    <EducationExperience/>
    <SkillsSection/>
    <ProjectsSection/>
    <ContactSection/>
    <FooterSection/>
   </div>
  )
}

export default App
