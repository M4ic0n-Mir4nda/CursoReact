import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar';


/* 'npm run backend' para iniciar a "API"*/

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>
            <Route exact="true" path="/" element={<Home/>}></Route>
            <Route exact="true" path="/project" element={<Projects/>}></Route>
            <Route exact="true" path="/company" element={<Company/>}></Route>
            <Route exact="true" path="/contact" element={<Contact/>}></Route>
            <Route exact="true" path="/newproject" element={<NewProject/>}></Route>
            <Route exact="true" path="/project/:id" element={<Project/>}></Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
