import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import JobSeekers from './Pages/JobSeekers';
import Employers from './Pages/Employers';
import ContactUs from './Pages/ContactUs';
import OurServices from './Pages/OurServices';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home2 from './Pages/Home-2';

function App() {
  return (
  <Router>
    <Header />
    <div>
      
      <Routes>
        <Route path='/' element={<Home2 />}/>
        <Route path='/main-home/' element={<Home />}/>
        <Route path='/about-us/' element={<About />}/>
        <Route path='/job-seekers/' element={<JobSeekers />}/>
        <Route path='/employers/' element={<Employers />}/>
        <Route path='/our-services/' element={<OurServices />}/>
        <Route path='/contact-us/' element={<ContactUs />}/>
      </Routes>
      <Footer />
    </div>

  </Router>
  );
}

export default App;
