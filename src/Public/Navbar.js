import './Navbar.css'

export default function Navbar()
{
    return(
        <>
        <nav className="navbar">
        <a href="/" className="logo"> <img src='logo.png' alt='Logo png'></img>AuthentifiAI</a>
        <a href="Login" className="login-button">Login</a>
      </nav>
        </>
    )
}

