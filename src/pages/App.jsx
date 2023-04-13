import '../App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';    //Χρήση για dynamic routing
import Home from '../pages/Home.jsx'
import Projects from '../pages/Projects.jsx'
import ProjectDisplay from '../pages/ProjectDisplay.jsx'
import Experience from '../pages/Experience.jsx'
import Contact from '../pages/Contact.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'


function App()
{
  return <div className="App">
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
  </div>
}

export default App;