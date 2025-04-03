'use client';

import { FaCode, FaChessKnight, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';
import Link from 'next/link';

export default function CoFounderTypes() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              The Dream Team Combinations
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Successful startups are built on complementary partnerships. Here are the most sought-after co-founder pairings:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FounderTypeCard
            icon={<FaCode className="h-8 w-8 text-blue-600" />}
            title="Technical Co-Founder"
            description="The builder who architects your product vision into reality. Brings coding expertise, technical roadmap planning, and engineering team leadership."
            strengths={[
              'Full-stack development',
              'Tech stack decisions',
              'Product architecture'
            ]}
            bgColor="bg-blue-50"
          />
          <FounderTypeCard
            icon={<FaChessKnight className="h-8 w-8 text-indigo-600" />}
            title="Business Strategist"
            description="The visionary who charts your growth path. Handles fundraising, investor relations, partnerships, and scaling strategy."
            strengths={[
              'Pitch deck creation',
              'Investor negotiations',
              'Market expansion'
            ]}
            bgColor="bg-indigo-50"
          />
          <FounderTypeCard
            icon={<FaChartLine className="h-8 w-8 text-blue-600" />}
            title="Growth Expert"
            description="The customer acquisition specialist. Drives marketing, sales, branding, and revenue generation strategies."
            strengths={[
              'Digital marketing',
              'Sales funnel optimization',
              'Brand positioning'
            ]}
            bgColor="bg-blue-50"
          />
          <FounderTypeCard
            icon={<FaMoneyBillWave className="h-8 w-8 text-indigo-600" />}
            title="Operations Leader"
            description="The executor who keeps the engine running. Manages finances, legal, HR, and day-to-day operations."
            strengths={[
              'Financial modeling',
              'Legal compliance',
              'Process optimization'
            ]}
            bgColor="bg-indigo-50"
          />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl px-8 py-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Which combination is right for your startup?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take our 2-minute matching quiz to identify your ideal co-founder profile based on your startup stage, industry, and personal strengths.
            </p>
            <Link
              href="/matching-quiz"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
            >
              Find Your Ideal Co-Founder Type →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FounderTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  strengths: string[];
  bgColor: string;
}

function FounderTypeCard({ icon, title, description, strengths, bgColor }: FounderTypeCardProps) {
  return (
    <div className="group h-full flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className={`${bgColor} p-6 flex items-center justify-center`}>
        <div className="p-4 bg-white rounded-full shadow-sm">
          {icon}
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Strengths</h4>
          <ul className="space-y-2">
            {strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700 text-sm">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}