import './Styles/App.css';
import NavBar from './NavigationBar/NavBar.js'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'
import Footer from './components/Footer/webFooter';

import Cart from './CartComponents/Cart/Cart'
import Products from './CartComponents/Products/Products';
import Registration from './UserAuthentication/Registration';
import Login from './UserAuthentication/Login';
import Logout from './UserAuthentication/Logout';
import { AuthContext } from './helpers/AuthContext';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import { connect } from "react-redux";

import axios from 'axios';

const App = ({ current }) => {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("https://h2z2-grocery-store.herokuapp.com/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);
  
 const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };

  return (

        <div className="App">

    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>

          {/*Navbar Component */}
           {!authState.status ? (
            <>
                {/* <button onClick={logout}> Logout </button> */}
              
              </>
          ) : (
                     <h1 className = "SignInBackground">SIGNED IN AS: {authState.username} </h1>
              
            )}

          <NavBar />
          <Routes className="routes-container">
            
            <Route path="/" exact element={<Home />} />
            <Route path="/About" element={<About />} />

            <Route path="/Registration" element={<Registration />} />
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/Logout" element={<Logout />}/> */}

            <Route path="/ContactUs" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />

            <Route path="/Products" element={<Products />} />
          </Routes>

          {/* <h1>SIGNED IN AS: {authState.username} </h1> */}

          <Footer />
      </Router>
    </AuthContext.Provider>
        </div>

  );
}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
