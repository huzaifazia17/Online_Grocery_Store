import React from 'react'
import { useState, useEffect } from "react";
//import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import axios from 'axios';

//NOT BEING USED 

const Logout = () => {

  //function to refresh page
  const refreshPage = () => {
    window.location.reload(false);
  }

  //function to logout and remove local storage token
  //sets authentication state to no user logged in
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };
  
  //function to refresh page and logout
  const logoutRefresh = () => {
    logout();
    refreshPage();
  }

  //set default authState as empty
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  //get information from website
  useEffect(() => {
    //axios.get('http://localhost:3001/auth/auth', {
    axios.get("https://h2z2-grocery-store.herokuapp.com/auth/auth", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    })
    .then((response) => {
      if (response.data.error) {
        setAuthState({...authState, status:false});
      } else {
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
      }
    });
}, []);
    
    return (
        <div>
            {!authState.status ? (
                <>
                    {/* <Routes>
                      <Route path="/Registration" element={<Registration />} />
                      <Route path="/Login" element={<Login />} />
                    </Routes> */}
              </>
            ) : (
          <button onClick={logoutRefresh} > Logout </button>
            
        )}
        
      {/* navigate("/"); */}

            {/* <h1> {authState.username} </h1> */}

        </div>
    )
}

export default Logout