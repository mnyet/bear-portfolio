import './App.css';
import './index.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App bg-[url(https://images.wallpaperscraft.com/image/single/forest_trees_fog_110131_1280x720.jpg)]
        bg-cover bg-center" style={{fontFamily: "'Roboto', sans-serif"}}>
        <Navbar/>
          <div className='content'>
            <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/projects' element={<Projects/>}></Route>
              <Route path='/about' element={<About/>}></Route>
            </Routes>
          </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
