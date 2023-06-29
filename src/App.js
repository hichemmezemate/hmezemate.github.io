import './App.css';
import Navbar  from './components/navbar';
import Home  from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = { <Home/> }/>
        <Route path='/Contact' element = { <Contact/> }/>
        <Route path='/Projects' element = { <Projects/> }/>
        
      </Routes>
    </div>
  );
}



export default App;
