import React, { useState } from "react";
import './Register.css'
import Navbar from "../Public/Navbar";
import Footer from "../Public/Footer";

import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent form from refreshing the page
      setError(""); // Clear previous errors
  
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up successfully!");
        alert("User signed up successfully!");
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
      <div style={styles.container}>
        <h2>Register</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          {error && <p style={styles.error}>{error}</p>}
          
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
  
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
  
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    );
  }
  
  const styles = {
    container: { maxWidth: "300px", margin: "auto", textAlign: "center", padding: "20px" },
    form: { display: "flex", flexDirection: "column" },
    input: { marginBottom: "10px", padding: "8px", fontSize: "16px" },
    button: { padding: "10px", fontSize: "16px", cursor: "pointer", backgroundColor: "#007BFF", color: "white", border: "none" },
    error: { color: "red", fontSize: "14px" }
  };
  

export default RegisterPage;