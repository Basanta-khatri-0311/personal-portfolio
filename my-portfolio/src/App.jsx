import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import ThemeToggle from "./components/ThemeToggle"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <NavBar/>
      <ThemeToggle />
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <SocialLinks/>
      <Footer/>
    </div>
  )
}

export default App
