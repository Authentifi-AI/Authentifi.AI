import { BrowserRouter as Router, Routes, Route , useLocation } from "react-router-dom";
import { useEffect } from 'react';
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/Login";
import RegisterPage from "./RegisterPage/Register";
import MagicLogin from "./LoginPage/MagicLogin";
import FinishSignIn from "./LoginPage/FinishSignIn";


export default function App() {

    return (
        <Router>
            <PageWrapper>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/MagicLogin" element={<MagicLogin />} />
                <Route path="/Register" element={<RegisterPage />} />
                <Route path="/FinishSignIn" element={<FinishSignIn />} />
            </Routes>
            </PageWrapper>
        </Router >
    )
}

function PageWrapper({ children }) {
    const location = useLocation();
  
    useEffect(() => {
      const body = document.body;
  
      // Reset the body ID before applying a new one
      body.removeAttribute('id');
  
      // Set the body ID based on the current route
      switch (location.pathname) {
        case '/':
          body.id = 'Home-page';
          break;
        case '/Login':
          body.id = 'Login-page';
          break;
        case '/MagicLogin':
          body.id = 'Magic-Login-page';
          break;
        case '/Register':
          body.id = 'Register-page';
          break;
        default:
          body.id = '';
      }
    }, [location]);
  
    return children;
  }
