import Image from 'next/image'
import { Laptop, ClubIcon as Football } from 'lucide-react'



export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      <h1 className="text-5xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
        About Minipedia Blog
      </h1>

      <div className="mb-12">
        <Image
          src="/Images/BlogBanner.png"
          alt="Minipedia Blog Banner"
          width={800}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert mb-12">

        <p className="text-xl leading-relaxed">
          Welcome to Minipedia Blog, your premier destination for exploring the exciting intersection of technology and football. We&apos;re passionate about bringing you the latest insights, analysis, and innovations from these two dynamic fields.
        </p>
        
        <p>
          Our team of expert writers and contributors are dedicated to delivering high-quality, well-researched articles that keep you informed and engaged. Whether you&apos;re a tech enthusiast, a football fan, or simply curious about how these worlds collide, we&apos;ve got something for you.
        </p>

        <p>
          At Minipedia Blog, we believe in the power of knowledge and the excitement of discovery. Join us as we explore cutting-edge technologies, analyze game-changing strategies, and uncover the future of both technology and football.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">

        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">

          <Laptop className="w-10 h-10 text-blue-400 mb-2" />

          <h2 className="text-2xl font-bold mb-2 text-white">Technology</h2>

          <p className="text-gray-300 mb-2">Exploring the digital frontier</p>

          <p className="text-gray-400">
            From AI and machine learning to cybersecurity and blockchain, we cover the latest trends and breakthroughs in the tech world.
          </p>

        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">

          <Football className="w-10 h-10 text-green-400 mb-2" />

          <h2 className="text-2xl font-bold mb-2 text-white">Football</h2>

          <p className="text-gray-300 mb-2">Tactics, analysis, and innovation</p>

          <p className="text-gray-400">
            Dive deep into match analysis, tactical innovations, and how technology is revolutionizing the beautiful game.
          </p>

        </div>

      </div>

      <div className="text-center">

        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>

        <p className="mb-6">Stay updated with our latest articles and discussions.</p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300">
          Subscribe to Our Newsletter
        </button>
        
      </div>

    </div>
  )
}

