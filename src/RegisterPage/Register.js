import React, { useState } from "react";
import './Register.css'
import Navbar from "../Public/Navbar";
import { Mail } from "lucide-react";
import { Eye } from "lucide-react"
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
        <Navbar className='grow-0 shrink basis-auto'></Navbar>
        <div className="flex grow shrink-1 basis-auto justify-center items-center">
          <div id="FormContainer" className="bg-white w-fit h-fit rounded-xl border-gray-300 border-1 text-center pl-5 pr-5 pt-10 pb-2 lg:pl-15 lg:pr-15 lg:pt-20 lg:pb-10">
            <h3 className="text-gray-900 text-sm lg:text-base 2xl:text-lg">Start your journey</h3>
            <h2 className="text-black text-xl font-semibold mt-2 lg:text-xl 2xl:text-2xl">Register to AuthentifiAI</h2>
            <form className="flex flex-col justify-center items-center mt-15" onSubmit={handleRegister}>
              {error && <p style={styles.error}>{error}</p>}
              {success && <p style={styles.success}>{success}</p>}
              {/* This is a div that wraps the email input field so i can integrate the email icon into the field itself */}
              <div className=" relative flex items-center">
                <input className="RegisterInput border-1 rounded-sm text-base p-2 lg:text-lg 2xl:text-xl lg:w-xs 2xl:w-sm"
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
                <input className="RegisterInput border-1 rounded-sm text-md p-2 lg:text-lg 2xl:text-xl lg:w-xs 2xl:w-sm"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }} />
                <Eye size={20} className="absolute right-3 text-gray-600" />
              </div>

              <button type="submit" className="mt-10 h-12 w-24 text-lg font-bold bg-white lg:text-xl 2xl:text-2xl lg:mt-15 2xl:h-15 2xl:w-30">Register</button>
              <h5 className="text-sm mt-10 -ml-3 lg:text-base 2xl:text-lg">Already have an account? <a href="/Login" className="underline text-blue-600">Login</a></h5>
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


export default RegisterPage;
