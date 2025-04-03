'use client';

import { FaBullseye, FaPuzzlePiece, FaHandshake, FaComments } from 'react-icons/fa';
import Link from 'next/link';

export default function GreatCoFounderQualities() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              The Anatomy of an Ideal Co-Founder
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            While technical skills get you started, these 4 pillars determine long-term startup success.
            Our data shows teams with these qualities raise 3x more funding and scale 2x faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <QualityCard
            icon={<FaBullseye className="h-8 w-8 text-blue-600" />}
            title="Vision Alignment"
            stats="83% of successful startups report perfect vision match"
            description="More than just agreeing - true partners who can articulate your company's north star while challenging you to think bigger."
          />
          <QualityCard
            icon={<FaPuzzlePiece className="h-8 w-8 text-indigo-600" />}
            title="Skill Symbiosis"
            stats="YC teams average 2.8 complementary skill sets"
            description="The magic happens when CTO-level tech expertise meets growth hacking prowess and operational mastery."
          />
          <QualityCard
            icon={<FaHandshake className="h-8 w-8 text-blue-600" />}
            title="Unshakeable Trust"
            stats="#1 predictor of founder breakups"
            description="Built through shared sacrifices and victories - the kind of loyalty that withstands 80-hour weeks and investor pressures."
          />
          <QualityCard
            icon={<FaComments className="h-8 w-8 text-indigo-600" />}
            title="Conflict Mastery"
            stats="Healthy teams resolve disputes 5x faster"
            description="The ability to turn heated debates into breakthrough decisions while maintaining mutual respect."
          />
        </div>

        <div className="mt-14 text-center bg-white rounded-xl p-8 shadow-md">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            <span className="font-semibold text-blue-600">The hard truth:</span> It takes 
            <span className="font-semibold"> 200+ hours</span> to properly vet a co-founder. 
            Our <span className="font-semibold">3-stage matching process</span> condenses this into 
            <span className="font-semibold"> 3 weeks</span> while increasing match quality by 40%.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/matching-criteria"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              See Our Matching Framework →
            </Link>
            <Link
              href="/compatibility-quiz"
              className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow hover:shadow-md"
            >
              Take Compatibility Quiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

interface QualityCardProps {
  icon: React.ReactNode;
  title: string;
  stats: string;
  description: string;
}

function QualityCard({ icon, title, stats, description }: QualityCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-blue-100">
      <div className="flex flex-col h-full">
        <div className="p-3 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-blue-600 font-medium mb-3">{stats}</p>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </div>
  );
}