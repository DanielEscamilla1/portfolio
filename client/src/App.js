import './App.css';
import Intro from './components/intro/Intro';
import Aboutme from './components/aboutme/Aboutme'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import ProjectList from './components/projectcards/ProjectList';


function App() {
  return (
    <Router>
      <Navbar />
      <Intro />
      <Aboutme />
      <ProjectList />
      <Contact />
    </Router>
  );
}

export default App;
