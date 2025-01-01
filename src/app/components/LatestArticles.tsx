'use client';

import Link from 'next/link';
import BlogCard from './BlogCard';
import { getRecentPosts } from '@/lib/posts';

export default function LatestArticles() {
    const recentPosts = getRecentPosts(3)

    return (
        <section className="px-5">

            <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Latest Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {recentPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}

            </div>

            <div className="text-center mt-8">
                <Link
                    href="/blogs"
                    className="inline-block bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors text-lg font-semibold"
                >
                    View All Articles
                </Link>
            </div>
            
        </section>
    );
}
