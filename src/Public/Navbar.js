export default function Navbar() {

  function Item({ value, Link }) {
    return (
      <a href={Link} className="text-md text-white mr-5 lg:text-lg">{value} </a>
    )
  }
  return (
    <>
      <nav className="navbar bg-blue-950 flex items-center w-full z-50 p-3">
        <img src='logo.png' alt='Logo png' className='w-7 h-auto mr-5'></img>
        <Item value={"AuthentifiAI"} Link={"/"}></Item>
        <Item value={"Login"} Link={"Login"}></Item>
        <Item value={"Register"} Link={"Register"}></Item>
      </nav>
    </>
  )
}

