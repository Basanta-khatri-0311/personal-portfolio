import React, { Suspense, lazy } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loading from "./components/Loading"; // Import the new Loading component

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const SocialLinks = lazy(() => import("./components/SocialLinks"));

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Suspense fallback={<Loading />}>
        {" "}
        {/* Use Loading component here */}
        <Hero />
        <About />
        <Projects />
        <Contact />
        <SocialLinks />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
