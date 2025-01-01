'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="text-center space-y-4">

            <h1 className="text-5xl font-bold mb-4 mt-16 text-blue-400">Welcome to Minipedia Blog</h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore the intersection of cutting-edge technology and the beautiful game.
                Stay ahead with our expert insights on tech innovations and football&apos;s top teams.
            </p>

            <Link
                href="/blogs"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
                Explore All Articles
            </Link>
            
        </section>
    );
}
