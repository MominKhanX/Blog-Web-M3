import { getPostsByCategory } from '@/lib/posts'
import BlogCard from '../components/BlogCard'

export default function FootballPage() {
    const footballPosts = getPostsByCategory('football')

    return (
        <div className="space-y-8">

            <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Football&apos;s Finest</h1>

            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Dive into the world of top teams, tactical masterclasses, and the rising stars shaping the beautiful game. Our expert analysis brings you closer to the heart of football.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                
                {footballPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}

            </div>

        </div>
    )
}

