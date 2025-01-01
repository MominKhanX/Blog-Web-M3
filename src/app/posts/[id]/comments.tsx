'use client'

import { useState } from 'react'

interface Comment {
    id: number
    author: string
    content: string
    createdAt: string
}

export default function Comments() {
    const [comments, setComments] = useState<Comment[]>([])
    const [newComment, setNewComment] = useState({ author: '', content: '' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (newComment.author && newComment.content) {
            setComments([
                ...comments,
                {
                    ...newComment,
                    id: Date.now(),
                    createdAt: new Date().toISOString()
                }
            ])
            setNewComment({ author: '', content: '' })
        }
    }

    return (
        <div className="mt-12">

            <h2 className="text-2xl font-bold mb-4 text-blue-400">Comments</h2>

            <form onSubmit={handleSubmit} className="mb-8">

                <div className="mb-4">

                    <label htmlFor="author" className="block mb-2 text-gray-300">Name:</label>
                    
                    <input
                        type="text"
                        id="author"
                        value={newComment.author}
                        onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                        required
                    />

                </div>

                <div className="mb-4">

                    <label htmlFor="content" className="block mb-2 text-gray-300">Comment:</label>

                    <textarea
                        id="content"
                        value={newComment.content}
                        onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                        rows={4}
                        required
                    ></textarea>

                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Add Comment
                </button>
                
            </form>

            <div className="space-y-4">

                {comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-800 p-4 rounded">

                        <div className="flex justify-between items-center mb-2">
                            <p className="font-semibold text-blue-400">{comment.author}</p>
                            <p className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
                        </div>

                        <p className="text-gray-300">{comment.content}</p>

                    </div>
                ))}

            </div>

        </div>
    )
}
