import React from 'react';
import { ThemeProvider } from './ThemeContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Capabilities from './components/Capabilities';
import Work from './components/Work';
import Experience from './components/Experience';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative">
        <BackgroundEffects />
        <NavBar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Capabilities />
          <Work />
          <Experience />
          <CurrentlyBuilding />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;