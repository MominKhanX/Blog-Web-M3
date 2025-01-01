'use client';

import FeaturedTopics from './components/FeaturedTopics';
import LatestArticles from './components/LatestArticles';
import Newsletter from './components/Newsletter';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedTopics />
      <LatestArticles />
      <Newsletter />
    </div>
  );
}
