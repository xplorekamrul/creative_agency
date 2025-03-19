import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="max-w-[1170px] mx-auto px-4 py-6 flex justify-between items-center">
      <div>
        <img src="/Logo.png" alt="" className="h-[53px] w-[90px]"/>
      </div>

      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-indigo-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-indigo-600">
          About
        </Link>
        <Link href="/service" className="hover:text-indigo-600">
          Service
        </Link>
        <Link href="/blog" className="hover:text-indigo-600">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-indigo-600">
          Contact
        </Link>
      </div>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
        Contact Us
      </button>
    </nav>
  )
}

