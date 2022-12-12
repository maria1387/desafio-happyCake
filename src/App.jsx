
import {
 
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./view/Contact";
import Home from "./view/Home";
import './assets/css/App.css'
import NotFound from "./view/NotFound";

function App() {


  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  )
}

export default App
