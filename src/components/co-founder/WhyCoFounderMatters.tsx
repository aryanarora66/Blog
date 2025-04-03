'use client';

import { FaChessKnight, FaBrain, FaBalanceScale, FaRocket } from 'react-icons/fa';
import Link from 'next/link';

export default function WhyCoFounderMatters() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Your Startup's Secret Weapon: The Right Co-Founder
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solo founders work twice as hard for half the results. The most successful startups are built by dynamic duos who combine strengths to outpace the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            icon={<FaChessKnight className="h-8 w-8 text-blue-600" />}
            title="1+1=3 Synergy"
            description="Multiply your startup's potential with a partner whose strengths cancel out your weaknesses and amplify your advantages."
          />
          <BenefitCard
            icon={<FaBrain className="h-8 w-8 text-indigo-600" />}
            title="Built-in Sounding Board"
            description="Make smarter decisions with instant feedback from someone equally invested in your success."
          />
          <BenefitCard
            icon={<FaBalanceScale className="h-8 w-8 text-blue-600" />}
            title="Risk Mitigation"
            description="Share the emotional and financial burden - startups with co-founders weather storms 2.3x better (Harvard Business Review)."
          />
          <BenefitCard
            icon={<FaRocket className="h-8 w-8 text-indigo-600" />}
            title="Investor Magnet"
            description="92% of top VCs prefer founding teams over solo founders (Sequoia Capital data)."
          />
        </div>

        <div className="mt-14 text-center bg-blue-50 rounded-xl p-8">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            <span className="font-semibold text-blue-600">The cold hard truth:</span> Your startup's success depends more on <span className="font-semibold">who</span> you build with than <span className="font-semibold">what</span> you build. At Networty, we've engineered the most sophisticated matching system to connect you with your ideal co-founder - someone who doesn't just share your vision, but completes it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/matching-process" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              See Our Matching Algorithm →
            </Link>
            <Link 
              href="/success-stories" 
              className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow hover:shadow-md"
            >
              Read Founder Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-blue-200">
      <div className="flex flex-col h-full">
        <div className="p-3 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </div>
  );
}