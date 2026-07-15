import React from 'react';
import { ThemeProvider } from './ThemeContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
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
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;