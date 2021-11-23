import React from 'react'
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationTester from './RegistrationTester';
import LoginTester from './LoginTester';
import axios from 'axios';

const Logout = () => {
 const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", id: 0, status: false });
    };
    
useEffect(() => {
    axios.get('https://h2z2-grocery-store.herokuapp.com/', {
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
                    <Routes>
               <Route path="/RegistrationTester" element={<RegistrationTester />} />
                        <Route path="/LoginTester" element={<LoginTester />} />
                        </Routes>
              </>
            ) : (
                <button onClick={logout}> Logout </button>
            )}

            <h1> {authState.username} </h1>

        </div>
    )
}

export default Logout