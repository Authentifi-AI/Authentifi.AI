import React, { useState } from "react";
import './Login.css'
import Navbar from "../Public/Navbar";
import Footer from "../Public/Footer";

import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent form from refreshing the page
      setError(""); // Clear previous errors
  
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in:", userCredential.user);
        alert("Login successful!");
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
      <div style={styles.container}>
        <h2>Login</h2>
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
  

export default LoginPage;