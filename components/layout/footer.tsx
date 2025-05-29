import Link from "next/link"
import { Logo } from "@/components/layout/logo"

export function Footer() {
  return (
    <footer className="w-full border-t authentifi-nav text-white">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-300 max-w-xs">
              Secure authentication and AI-powered research tools to protect your digital identity and enhance your
              research capabilities.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 mt-8 pt-8">
          <p className="text-xs text-gray-300">© 2025 AuthentifiAI. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/" className="text-xs text-gray-300 hover:text-white">
              Terms
            </Link>
            <Link href="/" className="text-xs text-gray-300 hover:text-white">
              Privacy
            </Link>
            <Link href="/" className="text-xs text-gray-300 hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
