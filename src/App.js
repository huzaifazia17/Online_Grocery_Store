import './Styles/App.css';
import NavBar from './JavaScript/NavBar.js'
import Home from './JavaScript/Home.js'
import About from './JavaScript/About.js'
import Contact from './JavaScript/Contact.js'
import Cart from './JavaScript/Cart.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './JavaScript/SignUp/SignUpForm.js'
import SignIn from './JavaScript/SignUp/Login.js'
import LoginForm from './JavaScript/SignUp/LoginForm.js'
import Login from './JavaScript/SignUp/Login.js'

const App = () => {

  return (

    <Router>

      <div className="App">
        {/*Navbar Component */}
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/SignUp" element={<SignUpForm />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
