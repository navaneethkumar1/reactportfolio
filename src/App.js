
import "./App.css";
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import Home from './component/Home';
import Skills from './component/Skills';
import Qualification from "./component/Qualification";
import Contact from "./component/Contact";
import Certification from "./component/Certification";
function App() {
  return (
    <>
    <div className="Navbar">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Certification' element={<Certification/>}/>
      <Route path='/Qualification' element={<Qualification/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <footer>
        <div className="ftr">
    <p> &#169; NAVANEETH KUMAR|ALL RIGHTS RESERVED</p>
    </div>
      </footer>
      </BrowserRouter>
      </div>
      </>
  );
}
export default App;
