import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './SignUp.css'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useNavigate } from "react-router-dom";


const Registration = () => {
    const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    });
  
  const onSubmit = (data) => {
    //axios.post("http://localhost:3001/auth", data).then(() => {
    axios.post("https://h2z2-grocery-store.herokuapp.com/auth", data).then(() => {
      console.log(data);
    })

    .catch(error => console.log(error));
                navigate("/");
  
    
  };
  
  return (
        <div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
        <h1>Sign Up for 20% OFF your next purchase!</h1>
          
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="registration"
            name="username"
            placeholder="(Ex. John123...)"
          />
          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="registration"
            name="password"
            placeholder="Your Password..."
          />

          <button type="submit"> Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration