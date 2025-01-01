'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-gray-800 text-white py-4 sticky top-0 z-50">

            <div className="container mx-auto px-4">

                <div className="flex justify-between items-center">

                    <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300 tracking-wider lg:ml-20 ml-0">
                        Minipedia
                    </Link>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full lg:mr-36 mr-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent`}>

                        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                            <li><Link href="/blogs" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Blogs</Link></li>
                            <li><Link href="/tech" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Tech</Link></li>
                            <li><Link href="/football" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Football</Link></li>
                            <li><Link href="/featured" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Featured</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        </ul>

                    </nav>

                </div>

            </div>

        </header>
    )
}

