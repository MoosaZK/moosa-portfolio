import './App.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import About from './components/About';
import Skill from './components/Skill';

function App() {
  return (
      <div>
        <NavBar />
        <div className='max-w-[1033px] mx-auto px-4'>
          <Hero />
          <About />
          <Skill />
        </div>
      </div>
  );
}

export default App;
