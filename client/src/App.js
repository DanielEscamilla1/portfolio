import './App.css';
import Intro from './components/intro/Intro';
import Aboutme from './components/aboutme/Aboutme'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'


function App() {
  return (
    <div>
      <Intro />
      <Aboutme />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
