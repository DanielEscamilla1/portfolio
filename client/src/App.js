import './App.css';
import Intro from './components/intro/Intro';
import Aboutme from './components/aboutme/Aboutme'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <Intro />
      <Aboutme />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
