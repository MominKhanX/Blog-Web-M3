'use client';

import Link from 'next/link';

export default function FeaturedTopics() {
    return (
        <section className="relative py-32 ">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500  to-purple-600 transform skew-y-3 -z-10"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4">

                <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Topics</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">

                        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Tech Innovations</h3>

                        <p className="text-gray-300 mb-4">
                            Dive into the latest breakthroughs in AI, quantum computing, and more. Stay informed about the technologies shaping our future.
                        </p>

                        <Link href="/tech" className="text-blue-400 hover:underline">
                            Explore Tech Articles →
                        </Link>

                    </div>
                    
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        
                        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Football&apos;s Finest</h3>
                        
                        <p className="text-gray-300 mb-4">
                            Get the inside scoop on top teams, tactical revolutions, and the rising stars shaping the beautiful game.
                        </p>

                        <Link href="/football" className="text-blue-400 hover:underline">
                            Explore Football Articles →
                        </Link>

                    </div>

                </div>

            </div>
            
        </section>
    );
}

