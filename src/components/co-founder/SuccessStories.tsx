'use client';

import { FaQuoteLeft, FaRocket, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

export default function SuccessStories() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Founder Partnerships That Soared
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join 1,200+ successful founder teams who found their perfect match through Networty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <StoryCard
            icon={<FaRocket className="h-6 w-6 text-blue-600" />}
            quote="Within 3 weeks on Networty, I connected with a technical co-founder who perfectly complemented my business skills. We just closed a $500K seed round!"
            author="Rahul S."
            role="CEO & Co-Founder, AI SaaS Startup"
            timeline="→ 6 months from match to funding"
          />
          <StoryCard
            icon={<FaChartLine className="h-6 w-6 text-indigo-600" />}
            quote="As a solo technical founder, I needed someone to handle growth. Found my business partner here - we've grown 30% MoM since teaming up!"
            author="Priya M."
            role="CTO & Co-Founder, FinTech Platform"
            timeline="→ 4x revenue growth in 5 months"
          />
        </div>

        <div className="text-center">
          <Link
            href="/success-stories"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Read More Founder Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}

interface StoryCardProps {
  icon: React.ReactNode;
  quote: string;
  author: string;
  role: string;
  timeline: string;
}

function StoryCard({ icon, quote, author, role, timeline }: StoryCardProps) {
  return (
    <div className="relative bg-gray-50 rounded-xl p-8 h-full hover:shadow-md transition-shadow duration-300">
      <div className="absolute top-6 right-6 text-gray-200 text-4xl">
        <FaQuoteLeft />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-sm mr-4">
          {icon}
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 mb-6">
        {quote}
      </blockquote>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm font-medium text-blue-600">{timeline}</p>
      </div>
    </div>
  );
}