// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext'; // Import the context provider
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Services from './components/Services/Services';
import Timeline from './components/Timeline/Timeline';
//import GitHubStats from './components/GitHubStats/GitHubStats'; 
import TechStack from './components/TechStack/TechStack';

function App() {
  return (
    <DarkModeProvider> {/* Wrap the app with DarkModeProvider */}
      <Router>
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Timeline />
            {/* Uncomment the line below to include GitHub stats */}
            {/* <GitHubStats /> */}
            {/* <TechStack /> */}
            <TechStack />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
            <Blog />
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
