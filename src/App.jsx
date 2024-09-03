import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Loading from './Components/Loading';

<script src="//code.tidio.co/8ravezamx1hmrvou26xyvxydiv4fvz7s.js" async></script>

const withDelay = (WrappedComponent, delay = 2000) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }, [delay]);

    return isLoading ? <Loading /> : <WrappedComponent {...props} />;
  };
};

const Home = withDelay(lazy(() => import('./Pages/MainHome')));
const JobSeekersFormPage = withDelay(lazy(() => import('./Pages/ApplicationForms/JobSeekers')));
const EmployersFormPage = withDelay(lazy(() => import('./Pages/ApplicationForms/Employers')));



function AppContent() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/job-seekers-application/' element={<JobSeekersFormPage />} />
          <Route path='/hire-candidates-application/' element={<EmployersFormPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename='/'>
      <AppContent />
    </Router>
  );
}

export default App;
