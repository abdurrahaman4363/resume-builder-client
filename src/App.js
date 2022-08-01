import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Templates from './Pages/Cv/Templates';
import FormCv from './Pages/Cv/FormCv';
import Login from './Pages/Login/Login';
import CoverLetter from './Pages/CoverLetter/CoverLetter';
import Resume from './Pages/Resume/Resume';
import SignUp from './Pages/Login/SignUp';
<<<<<<< HEAD
import TemplateForm from './Pages/CoverLetter/TemplateForm';
=======
import Contact from './Pages/Home/Contact';
import About from './Pages/Home/About';
>>>>>>> 09bd42fa27c9b62047098dfd746906c523c3b7d1

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} ></Route>
        <Route path='/cv' element={<Templates></Templates>}></Route>
        <Route path='/cv/form' element={<FormCv></FormCv>}></Route>
        <Route path='/templateForm' element={<TemplateForm></TemplateForm>}></Route>
        <Route path="/coverLetter" element={<CoverLetter></CoverLetter>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About /> } />
     

      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
