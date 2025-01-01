import { getPostsByCategory } from '@/lib/posts'
import BlogCard from '../components/BlogCard'

export default function TechPage() {
    const techPosts = getPostsByCategory('tech')

    return (
        <div className="space-y-8">

            <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Latest in Technology</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">

                {techPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}

            </div>

        </div>
    )
}

