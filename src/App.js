
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/Login";
import RegisterPage from "./RegisterPage/Register";




export default function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="Login" element={<LoginPage />} />
                <Route path="Register" element={<RegisterPage />} />

            </Routes>
        </Router >
    )
}