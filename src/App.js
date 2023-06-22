import './App.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
      <div className='overflow-hidden'>
        <NavBar />
        <div className='max-w-[1033px] mx-auto px-4'>
          <Hero />
          <About />
          <Skill />
          <Projects />
          <Contact />
        </div>
      </div>
  );
}

export default App;
