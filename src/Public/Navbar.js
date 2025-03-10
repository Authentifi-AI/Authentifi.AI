export default function Navbar() {

  function Item({ value, Link }) {
    return (
      <a href={Link} className="sm:max-lg:text-2xl text-white p-5 -mr-2">{value} </a>
    )
  }
  return (
    <>
      <nav className="navbar bg-blue-950 flex justify-baseline align-middle pl-1 w-full top-0 z-50 min-h-2">
        <img src='logo.png' alt='Logo png' className='w-20 h-auto -mb-4 -ml-3 -mr-8'></img>
        <Item value={"AuthentifiAI"} Link={"/"}></Item>
        <Item value={"Login"} Link={"Login"}></Item>
        <Item value={"Register"} Link={"Register"}></Item>
      </nav>
    </>
  )
}

