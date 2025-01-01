'use client';

export default function Newsletter() {
    return (
        <section className="bg-gray-800 py-16 rounded-lg">

            <div className="max-w-4xl mx-auto px-4 text-center">

                <h2 className="text-3xl font-bold mb-4 text-blue-400">Stay Ahead of the Curve</h2>

                <p className="text-xl text-gray-300 mb-8">
                    Join our newsletter and never miss an update on the latest in tech and football.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 justify-center">

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                        Subscribe
                    </button>

                </form>

            </div>

        </section>
    );
}

