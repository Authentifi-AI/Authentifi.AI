import React, { useState } from "react";
import './Register.css'
import Navbar from "../Public/Navbar";
import Footer from "../Public/Footer";
import { Mail } from "lucide-react";
import { Eye } from "lucide-react"

import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { em } from "motion/react-client";


function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        setError(""); // Clear previous errors
        setSuccess(""); // Clear previous success messages
    
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          setSuccess("Registered successfully!");
        } catch (error) {
          setError(error.message);
        }
      };


  return (
    <>
      <Navbar></Navbar>
      <div id="FormContainer">
        <h3>Start your journey</h3>
        <h2>Register to AuthentifiAI</h2>
        <form id="RegisterForm" onSubmit={handleRegister}>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
          <h4> Email </h4>
          {/* This is a div that wraps the email input field so i can integrate the email icon into the field itself */}
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <input id="RegisterEmailField" 
            className="RegisterInput" 
            type="email" 
            placeholder="Enter your email" 
            required
            pattern="[a-zA-Z0-9.]+@+[a-zA-Z0-9.]+.edu"
            onInvalid={(e) => e.target.setCustomValidity("Please enter a valid .edu email address.")}
            onInput={(e) => e.target.setCustomValidity("")}
            value={email} 
            onChange={(e) => {
              setEmail(e.target.value);
            }} />
            <Mail size={20} style={{ position: "absolute", right: "10px", color: "#777" }} />
          </div>

          <h4> Password </h4>
          {/* This is a div that wraps the password input field so i can integrate the eye icon into the field itself */}
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <input id="RegisterPasswordField" 
            className="RegisterInput" 
            type="password" 
            placeholder="Enter your password"
            value={password} 
            onChange={(e) => {
              setPassword(e.target.value);
            }} />
            <Eye size={20} style={{ position: "absolute", right: "10px", color: "#777" }} />
          </div>

          <button type="submit">Register</button>
        </form>

        <h5>Already have an account? <a href="/Login">Login</a></h5>
      </div>
    </>
  );
}

const styles = {
  error: { color: "red", fontSize: "1vw" },
  success: {color: "green", fontSize: "1vw"}
};


export default RegisterPage;