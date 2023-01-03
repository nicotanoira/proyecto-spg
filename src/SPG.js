<<<<<<< Updated upstream
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage.jsx";
import Services2D from "./views/Services2D.jsx";
import Services3D from "./views/Services3D.jsx";
import AppBar from "./components/AppBar";
=======
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage.jsx';
import Services2D from './views/Services2D.jsx';
import Services3D from './views/Services3D.jsx';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Forms from './components/Forms';
>>>>>>> Stashed changes

function SPG() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AppBar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/3D-configurators' element={<Services3D />} />
          <Route exact path='/2D-configurators' element={<Services2D />} />
        </Routes>
<<<<<<< Updated upstream
=======
        <Forms />
        <Footer />
>>>>>>> Stashed changes
      </div>
    </BrowserRouter>
  );
}

export default SPG;
