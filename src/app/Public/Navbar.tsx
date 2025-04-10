interface NavbarProps {
  className?: string;  // The ? makes this prop optional
}

interface ItemProps {
  value: string;
  Link: string;
}

export default function Navbar({ className }: NavbarProps) {

  function Item({ value, Link }: ItemProps) {
    return (
      <a href={Link} className="text-md text-white mr-5 lg:text-lg">{value} </a>
    )
  }
  return (
    <>
      <nav className={`navbar bg-blue-950 flex items-center w-full z-50 p-3 ${className || ''}`}>
        <img src='logo.png' alt='Logo png' className='w-7 h-auto mr-5'></img>
        <Item value={"AuthentifiAI"} Link={"/"}></Item>
        <Item value={"Login"} Link={"Login"}></Item>
        <Item value={"Register"} Link={"Register"}></Item>
      </nav>
    </>
  )
}

