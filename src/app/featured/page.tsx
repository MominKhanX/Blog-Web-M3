import { posts } from '@/lib/posts'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedArticlePage() {
    // we'll feature the first post
    const featuredPost = posts[0]

    return (
        <div className="max-w-4xl mx-auto py-12">

            <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Featured Article</h1>

            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">

                <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={800}
                    height={400}
                    className="w-full h-80 object-cover"
                />

                <div className="p-8">

                    <h2 className="text-3xl font-bold mb-4 text-blue-300">{featuredPost.title}</h2>

                    <div className="flex justify-between items-center text-gray-400 mb-4">
                        <span>{featuredPost.author}</span>
                        <span>{featuredPost.date}</span>
                    </div>

                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{featuredPost.content}</p>
                    
                    <div className="flex justify-between items-center">
                        <span className="text-blue-400 font-semibold">{featuredPost.category}</span>

                        <Link href={`/posts/${featuredPost.id}`} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                            Read Full Article
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    )
}

