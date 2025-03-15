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
      var login = await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Signed in successfully!");
      console.log(login);
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <>
        <Navbar className='grow-0 shrink basis-auto'></Navbar>
        <div className="flex grow shrink-1 basis-auto justify-center items-center">
          <div id="FormContainer" className="bg-white w-fit h-fit rounded-xl border-gray-300 border-1 text-center pl-5 pr-5 pt-10 pb-2">
            <h3 className="text-gray-900 text-sm">Start your journey</h3>
            <h2 className="text-black text-xl font-semibold mt-2">Sign in to AuthentifiAI</h2>
            <form className="flex flex-col justify-center items-center mt-15" onSubmit={handleLogin}>
              {error && <p style={styles.error}>{error}</p>}
              {success && <p style={styles.success}>{success}</p>}
              {/* This is a div that wraps the email input field so i can integrate the email icon into the field itself */}
              <div className=" relative flex items-center">
                <input className="LoginInput border-1 rounded-sm text-md p-2"
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
                <Mail size={20} className="absolute right-3 text-gray-600" />
              </div>

              {/* This is a div that wraps the password input field so i can integrate the eye icon into the field itself */}
              <div className=" relative flex items-center mt-5">
                <input className="LoginInput border-1 rounded-sm text-md p-2"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }} />
                <Eye size={20} className="absolute right-3 text-gray-600" />
              </div>

              <button type="submit" className="mt-10 h-12 w-24 text-lg font-bold bg-white">Login</button>
              <h5 className="text-sm mt-10 -ml-3">Dont have an account? <a href="/Register">Register</a></h5>
            </form>
          </div>

          
        </div>
    </>
  );
}

const styles = {
  error: { color: "red", fontSize: "1vw" },
  success: { color: "green", fontSize: "1vw" }
};


export default LoginPage;