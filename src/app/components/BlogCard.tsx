import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/posts'

export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">

      <Link href={`/posts/${post.id}`}>
        <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" />
      </Link>

      <div className="p-6">

        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-blue-400">{post.category}</span>
          <span className="text-sm text-gray-400">{post.date}</span>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-blue-300 hover:text-blue-400 transition-colors">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{post.author}</span>
          <Link href={`/posts/${post.id}`} className="text-blue-400 hover:underline">Read More</Link>
        </div>

      </div>
      
    </div>
  )
}

