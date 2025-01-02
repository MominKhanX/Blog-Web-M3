import { getPostById } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Comments from './comments'



export default function PostPage({ params }: { params: { id: string } }) {
    const post = getPostById(params.id)

    if (!post) {
        notFound()
    }

    return (
        <article className="max-w-3xl mx-auto">

            <Image src={post.image} alt={post.title} width={800} height={400} className="w-full h-64 object-cover rounded-lg mb-8" />

            <h1 className="text-4xl font-bold mb-4 text-blue-400">{post.title}</h1>

            <div className="flex justify-between items-center text-gray-400 mb-8">
                <span>{post.author}</span>
                <span>{post.date}</span>
            </div>

            <div className="prose prose-lg prose-invert mb-12">

                {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}

            </div>

            <Comments />
            
        </article>
    )
}

