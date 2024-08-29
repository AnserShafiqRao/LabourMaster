import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/MainHome';
import JobSeekersFormPage from './Pages/ApplicationForms/JobSeekers';
import EmployersFormPage from './Pages/ApplicationForms/Employers';

function App() {
  return (
  <Router>
    <Header />
    <div>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/job-seekers-application/' element={<JobSeekersFormPage />}/>
        <Route path='/hire-candidates-application/' element={<EmployersFormPage />}/>
      </Routes>
      <Footer />
    </div>

  </Router>
  );
}

export default App;
