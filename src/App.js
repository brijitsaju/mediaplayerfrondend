
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Watch from './pages/Watch';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div >
     
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Watch' element={<Watch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
