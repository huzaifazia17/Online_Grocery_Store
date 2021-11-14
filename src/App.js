import './Styles/App.css';
import NavBar from './JavaScript/NavBar.js'
import Home from './JavaScript/Home.js'
import About from './JavaScript/About.js'
import SignUp from './JavaScript/SignUp.js'
import Contact from './JavaScript/Contact.js'
import Cart from './JavaScript/Cart.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <div className="App">
        {/*Navbar Component */}
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
