import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">

            <div className="container mx-auto px-4">

                <div className="flex flex-wrap justify-between">

                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-2 lg:ml-20 ml-0">Minipedia Blog</h3>
                        <p className="text-gray-400 lg:ml-20 ml-0">Stay updated with the latest in technology and football.</p>
                    </div>

                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Quick Links</h3>

                        <ul className="space-y-2">
                            <li><a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
                            <li><a href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-bold mb-2">Follow Us</h3>

                        <div className="flex space-x-4">
                            <a href="https://www.x.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors"><FaTwitter size={24} /></a>
                            <a href="https://www.facebook.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors"><FaFacebook size={24} /></a>
                            <a href="https://www.instagram.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors"><FaInstagram size={24} /></a>
                        </div>
                    </div>

                </div>

                <div className="mt-8 text-center text-gray-400">
                    &copy; 2025 Minipedia Blog. All rights reserved.
                </div>

            </div>

        </footer>
    )
}

