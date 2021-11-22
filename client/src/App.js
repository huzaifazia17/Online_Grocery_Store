import './Styles/App.css';
import NavBar from './JavaScript/NavBar.js'
import Home from './JavaScript/Home.js'
import About from './JavaScript/About.js'
import Contact from './JavaScript/Contact.js'
import Cart from './JavaScript/Cart.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import SignUpForm from './JavaScript/SignUp/SignUpForm.js'
//import SignIn from './JavaScript/SignUp/Login.js'
//import LoginForm from './JavaScript/SignUp/LoginForm.js'
//import Login from './JavaScript/SignUp/Login.js'
import RegistrationTester from './JavaScript/LoginOfficial/RegistrationTester';
import LoginTester from './JavaScript/LoginOfficial/LoginTester';
import Logout from './JavaScript/LoginOfficial/Logout';
import { useState, useEffect } from "react";
import { AuthContext } from './helpers/AuthContext';
import axios from 'axios';

const App = () => {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  return (


<AuthContext.Provider value ={{authState, setAuthState}}>
    <Router>

      <div className="App">
        
        
        {/*Navbar Component */}
        <NavBar />
        <Routes className="routes-container">
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          
          <Route path="/RegistrationTester" element={<RegistrationTester />} />
            <Route path="/LoginTester" element={<LoginTester />} />
      
          <Route path="/Logout" element={<Logout />} />

          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
    </AuthContext.Provider>

  );
}

export default App;
