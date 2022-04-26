import "./App.css";
import Intro from "./components/intro/Intro";
import Aboutme from "./components/aboutme/Aboutme";
// import Projects from './components/projects/Projects'
import Toggle from "./components/toggle/Toggle";
import Contact from "./components/contact/Contact";
import Navbar from "./components/nav/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectList from "./components/projectcards/ProjectList";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Router>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <Navbar />
        <Toggle />
        <Intro />
        <Aboutme />
        <ProjectList />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
