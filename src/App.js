import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
