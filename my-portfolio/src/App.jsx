import React from "react"
import Hero from "./components/Hero"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
// import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

function App() {

  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Contact/>
      <SocialLinks/>
      <Footer/>
    </div>
  )
}

export default App
