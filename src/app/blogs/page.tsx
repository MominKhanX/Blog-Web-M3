import { posts } from '@/lib/posts'
import Link from 'next/link'
import BlogCard from '../components/BlogCard'

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">

      <div className="text-center space-y-4">

        <h1 className="text-5xl font-bold mb-8 text-blue-400">All Articles</h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Dive into our comprehensive collection of articles covering the latest in technology and football. 
          From in-depth analyses to breaking news, we&apos;ve got you covered.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}

      </div>

      <div className="text-center">
        <Link href="/" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-xl font-semibold">
          Back to Home
        </Link>
      </div>
      
    </div>
  )
}

