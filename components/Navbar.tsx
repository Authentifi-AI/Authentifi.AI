"use client"

import Link from "next/link"

export default function Navbar() {
  function Item({ value, href }: { value: string; href: string }) {
    return (
      <Link href={href} className="text-md text-white mr-5 lg:text-lg">
        {value}
      </Link>
    )
  }

  return (
    <nav className="navbar bg-blue-950 flex items-center w-full z-50 p-3">
      <img src="/logo.png" alt="Logo png" className="w-7 h-auto mr-5" />
      <Item value={"AuthentifiAI"} href={"/"} />
      <Item value={"Login"} href={"/login"} />
      <Item value={"Register"} href={"/register"} />
    </nav>
  )
}
