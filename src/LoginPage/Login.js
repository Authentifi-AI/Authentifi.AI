import React, { useState } from "react";
import './Login.css'
import Navbar from "../Public/Navbar";
import Footer from "../Public/Footer";
import { Mail } from "lucide-react";
import { Eye } from "lucide-react"

import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { em } from "motion/react-client";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        setError(""); // Clear previous errors
        setSuccess(""); // Clear previous success messages
    
        try {
          await signInWithEmailAndPassword(auth, email, password);
          setSuccess("Signed in successfully!");
        } catch (error) {
          setError(error.message);
        }
      };


  return (
    <>
      <Navbar></Navbar>
      <div id="LeftSideContainer">
        <h3>Start your journey</h3>
        <h2>Sign in to to AuthentifiAI</h2>
        <form id="LoginForm" onSubmit={handleLogin}>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
          <h4> Email </h4>
          {/* This is a div that wraps the email input field so i can integrate the email icon into the field itself */}
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <input id="LoginEmailField" 
            className="LoginInput" 
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
            <input id="LoginPasswordField" 
            className="LoginInput" 
            type="password" 
            placeholder="Enter your password"
            value={password} 
            onChange={(e) => {
              setPassword(e.target.value);
            }} />
            <Eye size={20} style={{ position: "absolute", right: "10px", color: "#777" }} />
          </div>

          <button type="submit">Login</button>
        </form>

        <h5>Dont have an account? <a href="/Register">Register</a></h5>
      </div>
    </>
  );
}

const styles = {
  error: { color: "red", fontSize: "1vw" },
  success: {color: "green", fontSize: "1vw"}
};


export default LoginPage;