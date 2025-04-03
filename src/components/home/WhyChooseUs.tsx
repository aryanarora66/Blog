'use client';

import { FaUserAlt, FaHandshake, FaLockOpen, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              🔥 Why Networty.com?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The all-in-one platform designed to remove startup roadblocks and accelerate your success
          </p>
        </div>

        {/* Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <BenefitCard
            icon={<FaUserAlt className="h-8 w-8 text-blue-600" />}
            title="Co-Founder Matching"
            description="Our AI-powered algorithm connects you with compatible partners who complement your skills and share your vision."
            badgeText="Smart Matching"
          />
          <BenefitCard
            icon={<FaHandshake className="h-8 w-8 text-indigo-600" />}
            title="Investor Connections"
            description="Direct access to our network of 500+ verified investors actively looking for promising startups like yours."
            badgeText="Premium Network"
          />
          <BenefitCard
            icon={<FaLockOpen className="h-8 w-8 text-purple-600" />}
            title="No Hidden Barriers"
            description="Transparent process with no upfront fees. We succeed only when you succeed."
            badgeText="Zero Hassle"
          />
        </div>

        {/* Additional Value Sections */}
        <div className="space-y-16">
          {/* Startup Growth Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <FaRocket className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Startup Growth Toolkit</h3>
              </div>
              <p className="text-gray-600">
                Access our library of resources including pitch deck templates, term sheet examples, 
                and growth hacking strategies curated by successful founders.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Legal document templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Equity calculator tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Go-to-market strategy guides</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 h-full">
              <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-md overflow-hidden">
                {/* Placeholder for image or illustration */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Startup Resources Preview]
                </div>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-last lg:order-first bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 h-full">
              <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-md overflow-hidden">
                {/* Placeholder for image or illustration */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Community Preview]
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <FaUsers className="h-6 w-6 text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900">Founder Community</h3>
              </div>
              <p className="text-gray-600">
                Join our exclusive network of 10,000+ founders where you can exchange ideas, 
                get feedback, and find potential collaborators.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Monthly AMAs</h4>
                  <p className="text-sm text-gray-600">With successful founders and investors</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Local Meetups</h4>
                  <p className="text-sm text-gray-600">Network in 20+ cities worldwide</p>
                </div>
              </div>
            </div>
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
  badgeText: string;
}

function BenefitCard({ icon, title, description, badgeText }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
            {badgeText}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-6">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center">
            See how it works
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}