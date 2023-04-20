import './App.css';
import { Home } from './pages/Home/Home';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Program } from './pages/Program/Program';
import { Training } from './pages/Training/Training';
import { Pricing } from './pages/Pricing/Pricing';
import { Navbar } from './navbar';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='program' element={<Program />} />
        <Route path='training' element={<Training />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='login' element={<Login />}/> 
        <Route path='login/register' element={<Register />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
