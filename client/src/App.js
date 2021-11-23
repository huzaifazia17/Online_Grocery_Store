import './Styles/App.css';
import NavBar from './NavigationBar/NavBar.js'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'
import Cart from './CartComponents/Cart/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import SignUpForm from './JavaScript/SignUp/SignUpForm.js'
//import SignIn from './JavaScript/SignUp/Login.js'
//import LoginForm from './JavaScript/SignUp/LoginForm.js'
//import Login from './JavaScript/SignUp/Login.js'
import RegistrationTester from './UserAuthentication/RegistrationTester';
import LoginTester from './UserAuthentication/LoginTester';
import Logout from './UserAuthentication/Logout';
import { useState, useEffect } from "react";
import { AuthContext } from './helpers/AuthContext';
import axios from 'axios';
import Products from './CartComponents/Products/Products';
import { connect } from "react-redux";
import Footer from './components/Footer/webFooter';
import Profile from './components/Profile/Profile';

const App = ({ current }) => {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  return (


    <AuthContext.Provider value={{ authState, setAuthState }}>
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


            <Route path="/RegistrationTester" element={<RegistrationTester />} />
            <Route path="/LoginTester" element={<LoginTester />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/ContactUs" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>

  );
}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
