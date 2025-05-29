"use client"

import Link from "next/link"

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="text-xs mr-2 xl:text-sm">
      {text}
    </Link>
  )
}

export default function Footer() {
  return (
    <section className="bg-blue-950 grid grid-cols-4 text-white pt-2 pl-2 pr-1 pb-5">
      <h1 className="text-lg col-span-1 xl:text-2xl">Authentifi</h1>

      <div className="col-span-3 text-right">
        <FooterLink href="/" text="Privacy Policy" />
        <FooterLink href="/" text="Terms of Service" />
        <FooterLink href="/" text="Contact Us" />
      </div>

      <h2 className="text-xsm col-span-4 text-center mt-2">Empowering research with AI and blockchain</h2>

      <h3 className="h3-footer col-span-4 text-center">&copy; 2025 Authentifi, All rights reserved.</h3>
    </section>
  )
}
