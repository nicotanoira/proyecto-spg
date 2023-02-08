import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import LandingPage from './views/LandingPage.jsx';
import Services2D from './views/Services2D.jsx';
import Services3D from './views/Services3D.jsx';
import RendersAndModelServices from './views/RendersAndModelServices.jsx';
import AppBar from './components/AppBar';
import Footer from './components/Footer';

const useGlobalRef = initialValue => {
  const ref = useRef(initialValue);
  return ref;
};

function SPG() {
  const myRef = useGlobalRef(null);
  const handleContactClick = () => {
    console.log("Se ejectuo el HANDLECLICK SCROLL", myRef)
		myRef.current.scrollIntoView({ behavior: 'smooth', offsetTop: "-2rem"  });
	};
  return (
    <BrowserRouter>
        <AppBar handleContactClick={handleContactClick} />
        <Routes>
          <Route exact path='/' element={<LandingPage handleContactClick={handleContactClick} myRef={myRef} />} />
          <Route exact path='/3D-configurators' element={<Services3D myRef={myRef} />} />
          <Route exact path='/2D-configurators' element={<Services2D myRef={myRef} />} />
          <Route
            exact
            path='/renderings-and-models'
            element={<RendersAndModelServices myRef={myRef} />}
          />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default SPG;
